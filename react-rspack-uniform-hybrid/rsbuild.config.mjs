import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginCssMinimizer } from "@rsbuild/plugin-css-minimizer";

export default defineConfig({
  resolve: {},
  environments: {
    web: {
      output: {
        target: "web"
      },
      source: {
        entry: {
          index: "./src/index"
        }
      }
    },
    ssr: {
      output: {
        target: "node",
        distPath: {
          root: "dist/server"
        }
      },
      source: {
        entry: {
          index: "./src/index.server"
        }
      }
    }
  },
  html: {
    template: "./template.html"
  },
  server: {
    port: 3000
  },
  plugins: [pluginReact(), pluginCssMinimizer()]
});
