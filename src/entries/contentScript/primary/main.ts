import browser from "webextension-polyfill";
import PathBoxComponent from "../../../lib/components/PathBox.svelte";
import { waitForElement } from "../../../lib/utils/waitForElement";
import prepareComponent from "../renderContent";
import PageFactory from "../../../lib/pages/pageFactory";
import OptionsSyncStorage from "../../../lib/services/storage";

const storage = OptionsSyncStorage.getInstance();

let lastUrl = location.href;
new MutationObserver(() => {
  const url = location.href;
  if (url !== lastUrl) {
    lastUrl = url;
    loadPathBox();
  }
}).observe(document, { subtree: true, childList: true });

async function loadPathBox() {
  if (await storage.get("showPathBox")) {
    const pathBox = await prepareComponent((appRoot) => {
      new PathBoxComponent({
        target: appRoot,
        props: {
          currentPath: window.location.pathname.split("/")[1],
        },
      });
    });

    Promise.any([waitForElement("#root")]).then((root) => {
      if (root.querySelector("#vitesicure-path-box")) return;
      root.appendChild(pathBox);
    });
  }
}

loadPathBox();

browser.runtime.onMessage.addListener(
  async function (message, sender, sendResponse) {
    if (message.message === "auto-fill") {
      const { goToNextPage } = message.content;
      const [_, product, isPreventivatorePage, isOtherPage] =
        window.location.pathname.split("/");

      const path = isOtherPage ? isOtherPage : isPreventivatorePage;
      const page = PageFactory.getPage(product, path);
      await page.autofill();

      if (goToNextPage) {
        page.goToNextPage();
      }
    }
  },
);

browser.runtime.onMessage.addListener(
  async function (message, sender, sendResponse) {
    if (message.message === "remove-path-box") {
      document.getElementById("vitesicure-path-box")?.remove();
    }
  },
);

browser.runtime.onMessage.addListener(
  async function (message, sender, sendResponse) {
    if (message.message === "load-path-box") {
      loadPathBox();
    }
  },
);
