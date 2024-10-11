import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";
import { dependencies } from "./package.json";

export default defineConfig({
  server: {
    port: 3001
  },
  dev: {
    // It is necessary to configure assetPrefix, and in the production environment, you need to configure output.assetPrefix
    assetPrefix: 'http://localhost:3001',
  },
  tools: {
    rspack: (config, { appendPlugins }) => {
      appendPlugins([
        new ModuleFederationPlugin({
          name: "MfeRemotePlp",
          exposes:{
            "./ProductListing": "./src/components/ProductListing.tsx"
          },
          filename: 'remoteEntry.js',
          manifest: {
            filePath: 'manifestpath',
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
            '@radix-ui/themes': {
              eager: true,
              version: dependencies['@radix-ui/themes'],
              singleton: true,
              requiredVersion: dependencies['@radix-ui/themes'],
            },
          },
          // shared: ['react', 'react-dom', '@radix-ui/themes'],
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
