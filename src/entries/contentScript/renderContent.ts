import browser from "webextension-polyfill";

export default async function prepareComponent(
  render: (appRoot: HTMLElement) => void,
) {
  const appContainer = document.createElement("div");
  appContainer.id = "vitesicure-path-box";
  const shadowRoot = appContainer.attachShadow({
    mode: import.meta.env.MODE === "development" ? "open" : "closed",
  });
  const appRoot = document.createElement("div");

  if (import.meta.hot) {
    const { addViteStyleTarget } = await import(
      "@samrum/vite-plugin-web-extension/client"
    );

    await addViteStyleTarget(shadowRoot);
  } else {
    import.meta.PLUGIN_WEB_EXT_CHUNK_CSS_PATHS.forEach((cssPath: string) => {
      const styleEl = document.createElement("link");
      styleEl.setAttribute("rel", "stylesheet");
      styleEl.setAttribute("href", browser.runtime.getURL(cssPath));
      shadowRoot.appendChild(styleEl);
    });
  }

  shadowRoot.appendChild(appRoot);

  render(appRoot);

  return appContainer;
}
