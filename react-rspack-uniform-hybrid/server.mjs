import {
  EMPTY_COMPOSITION,
  IN_CONTEXT_EDITOR_CONFIG_CHECK_QUERY_STRING_PARAM
} from "@uniformdev/canvas";
import express from "express";
import { createRsbuild, loadConfig } from "@rsbuild/core";
import { getComposition } from "./src/uniform/api.mjs";

const PLAYGROUND_PATH = "/";
let composition = EMPTY_COMPOSITION;

const serverRender = (serverAPI) => async (_req, res) => {
  const indexModule = await serverAPI.environments.ssr.loadBundle("index");

  const markup = indexModule.render({ composition });

  const template = await serverAPI.environments.web.getTransformedHtml("index");

  const html = template.replace("<!--app-content-->", markup);

  res.writeHead(200, {
    "Content-Type": "text/html"
  });
  res.end(html);
};

/**
 * Starts the development server.
 *
 * This function initializes the Rsbuild configuration, creates an Express application,
 * and sets up the Rsbuild development server instance. It also defines middleware for
 * handling server-side rendering and API requests.
 *
 * @async
 * @function startDevServer
 * @returns {Promise<Object>} An object containing a `close` method to shut down the server.
 */
export async function startDevServer() {
  const { content } = await loadConfig({});

  // Init Rsbuild
  const rsbuild = await createRsbuild({
    rsbuildConfig: content
  });

  const app = express();

  // Create Rsbuild DevServer instance
  const rsbuildServer = await rsbuild.createDevServer();

  const serverRenderMiddleware = serverRender(rsbuildServer);

  app.use("*", async (req, res, next) => {
    try {
      const isConfigCheck =
        req.query[IN_CONTEXT_EDITOR_CONFIG_CHECK_QUERY_STRING_PARAM] === "true";
      if (isConfigCheck) {
        res.json({
          hasPlayground: Boolean(PLAYGROUND_PATH)
        });
        return;
      }

      const path = req.params[0];

      // Used the custom isAllowedReferrer because the one from uniform doesn't support http://localhost
      const isAllowedReferrer = (referrer) => {
        return Boolean(
          referrer == null
            ? void 0
            : referrer.match(
                /(^(http|https)?:\/\/|\.)(uniform.app|uniform.wtf|localhost:\d{4})\//
              )
        );
      };

      if (
        req.params[0] === "/api/preview" &&
        isAllowedReferrer(req.headers.referer)
      ) {
        composition = EMPTY_COMPOSITION;
      } else {
        composition = await getComposition(path);
      }

      await serverRenderMiddleware(req, res, next);
    } catch (err) {
      console.error("SSR render error, downgrade to CSR...\n", err);
      next();
    }
  });

  // Apply Rsbuild’s built-in middlewares
  app.use(rsbuildServer.middlewares);

  const httpServer = app.listen(rsbuildServer.port, () => {
    // Notify Rsbuild that the custom server has started
    rsbuildServer.afterListen();
  });

  rsbuildServer.connectWebSocket({ server: httpServer });

  return {
    close: async () => {
      await rsbuildServer.close();
      httpServer.close();
    }
  };
}

startDevServer();
