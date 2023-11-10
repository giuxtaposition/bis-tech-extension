import browser from "webextension-polyfill";

export default async function renderContent(
  cssPaths: string[],
  render: (appRoot: HTMLElement) => void,
) {
  const appContainer = document.createElement("div");
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
    cssPaths.forEach((cssPath: string) => {
      const styleEl = document.createElement("link");
      styleEl.setAttribute("rel", "stylesheet");
      styleEl.setAttribute("href", browser.runtime.getURL(cssPath));
      shadowRoot.appendChild(styleEl);
    });
  }

  shadowRoot.appendChild(appRoot);

  render(appRoot);

  Promise.any([
    waitForElement("#vite-sicure-logo"),
    waitForElement('img[alt="vite-sicure-logo"]'),
  ]).then((viteSicureLogo) => {
    let header: HTMLElement;
    if (viteSicureLogo!.tagName === "IMG") {
      header = viteSicureLogo!.parentElement!;
    } else {
      header = viteSicureLogo!.parentElement!.parentElement!;
    }

    header.appendChild(appContainer);
  });
}

function waitForElement(selector: string): Promise<Element | null> {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver((_) => {
      if (document.querySelector(selector)) {
        observer.disconnect();
        resolve(document.querySelector(selector));
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}
