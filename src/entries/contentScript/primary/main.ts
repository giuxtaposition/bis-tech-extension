import renderContent from "../renderContent";
import App from "./App.svelte";

import { onMessage } from "webext-bridge/content-script";

onMessage("load-path-box", ({}) => {
  renderContent(import.meta.PLUGIN_WEB_EXT_CHUNK_CSS_PATHS, (appRoot) => {
    new App({
      target: appRoot,
    });
  });
});

onMessage("remove-path-box", ({}) => {
  document.getElementById("vitesicure-path-box")?.remove();
});
