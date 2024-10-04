import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";
import { dependencies } from "./package.json";
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
  tools: {
    rspack: (config, { appendPlugins }) => {
      appendPlugins([
        new ModuleFederationPlugin({
          name: "MfeWebApp",
          remotes: {
            MfeRemotePlp: "MfeRemotePlp@http://localhost:3001/remoteEntry.js",
            MfeRemotePdp: "MfeRemotePdp@http://localhost:3002/remoteEntry.js"
          },
          shared: {
            ...dependencies,
            react: {
              eager: true,
              singleton: true,
              requiredVersion: dependencies["react"]
            },
            "react-dom": {
              eager: true,
              singleton: true,
              requiredVersion: dependencies["react-dom"]
            },
            "react-router-dom": {
              eager: true,
              singleton: true,
              requiredVersion: dependencies["react-router-dom"]
            },
            "@uniformdev/canvas": {
              eager: true,
              singleton: true,
              requiredVersion: dependencies["@uniformdev/canvas"]
            },
            "@uniformdev/canvas-react": {
              eager: true,
              singleton: true,
              requiredVersion: dependencies["@uniformdev/canvas-react"]
            },
            "@uniformdev/context-react": {
              eager: true,
              singleton: true,
              requiredVersion: dependencies["@uniformdev/context-react"]
            },
            "@uniformdev/context": {
              eager: true,
              singleton: true,
              requiredVersion: dependencies["@uniformdev/context"]
            },
            "@radix-ui/themes": {
              eager: true,
              version: dependencies["@radix-ui/themes"],
              singleton: true,
              requiredVersion: dependencies["@radix-ui/themes"]
            }
          }
        })
      ]);
    }
  },
  plugins: [pluginReact(), pluginCssMinimizer()]
});
