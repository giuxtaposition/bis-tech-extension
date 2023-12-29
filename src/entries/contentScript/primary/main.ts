import browser from "webextension-polyfill";
import PathBoxComponent from "../../../lib/components/PathBox.svelte";
import { waitForElement } from "../../../lib/utils/waitForElement";
import prepareComponent from "../renderContent";
import PageFactory from "../../../lib/pages/pageFactory";

browser.runtime.onMessage.addListener(
  async function (message, sender, sendResponse) {
    if (message.message === "load-path-box") {
      const pathBox = await prepareComponent((appRoot) => {
        new PathBoxComponent({
          target: appRoot,
          props: {
            currentPath: window.location.pathname.split("/")[1],
          },
        });
      });

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
        if (header.querySelector("#vitesicure-path-box")) return;
        header.appendChild(pathBox);
      });
    }
  },
);

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
