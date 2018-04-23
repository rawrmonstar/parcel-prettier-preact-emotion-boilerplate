import { h, render } from "preact";
import "./styles/global";
import App from "./components/app";

import { isDev } from "./utils/env";

if (isDev) {
  require("preact/debug");
}

const mountNode = document.getElementById("app");
render(<App />, mountNode, mountNode.lastChild);
