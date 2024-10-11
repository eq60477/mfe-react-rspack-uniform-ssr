import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";
import { dependencies } from "./package.json";

export default defineConfig({
  server: {
    port: 3002
  },
  dev: {
    // It is necessary to configure assetPrefix, and in the production environment, you need to configure output.assetPrefix
    assetPrefix: 'http://localhost:3002',
  },
  tools: {
    rspack: (config, { appendPlugins }) => {
      appendPlugins([
        new ModuleFederationPlugin({
          name: "MfeRemotePdp",
          exposes: {
            "./ProductDetail": "./src/components/ProductDetail.tsx"
          },
          filename: 'remoteEntry.js',
          manifest: {
            filePath: 'manifestpath',
          },
          shared: ['react', 'react-dom', '@radix-ui/themes'],
        })
      ]);
    }
  },
  plugins: [
    pluginReact({
      splitChunks: {
        react: false,
        router: false
      }
    })
  ]
});
