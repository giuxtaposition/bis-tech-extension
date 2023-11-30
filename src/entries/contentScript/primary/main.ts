import prepareComponent from "../renderContent";
import PathBoxComponent from "../../../lib/components/PathBox.svelte";

import { onMessage } from "webext-bridge/content-script";
import { waitForElement } from "../../../lib/utils/waitForElement";
import AutoFillService from "../../../lib/services/autoFillService";

onMessage("load-path-box", async ({}) => {
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
    header.appendChild(pathBox);
  });
});

onMessage("auto-fill", ({}) => {
  const [_, product, isPreventivatorePage, isOtherPage] =
    window.location.pathname.split("/");

  const page = isOtherPage ? isOtherPage : isPreventivatorePage;
  console.log("should autofille");
  AutoFillService.autofill(product, page);
});

onMessage("remove-path-box", ({}) => {
  document.getElementById("vitesicure-path-box")?.remove();
});
