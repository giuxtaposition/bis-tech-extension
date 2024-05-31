import PathBoxComponent from "../../../lib/components/PathBox.svelte";
import { waitForElement } from "../../../lib/utils/waitForElement";
import prepareComponent from "../renderContent";
import PageFactory from "../../../lib/pages/pageFactory";
import OptionsSyncStorage from "../../../lib/services/storage";
import MessagingService from "../../../lib/services/messagingService/messagingService";

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

MessagingService.listen("auto-fill", async (content) => {
  const { goToNextPage } = content;
  const [_, product, isPreventivatorePage, isOtherPage] =
    window.location.pathname.split("/");

  const path = isOtherPage ? isOtherPage : isPreventivatorePage;
  const page = PageFactory.getPage(product, path);
  await page.autofill();

  if (goToNextPage) {
    page.goToNextPage();
  }
});

MessagingService.listen("remove-path-box", async () => {
  document.getElementById("vitesicure-path-box")?.remove();
});

MessagingService.listen("load-path-box", async () => {
  loadPathBox();
});
