import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "./App";
import { Theme } from "@radix-ui/themes";

export function render({ composition }) {
  return ReactDOMServer.renderToString(
    <React.StrictMode>
        <App composition={composition} />
    </React.StrictMode>
  );
}
