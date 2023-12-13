import browser from "webextension-polyfill";
import { sendMessage } from "webext-bridge/background";
import optionsStorage from "./optionsStorage";

browser.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");
});

browser.tabs.onUpdated.addListener(async function (tabId, changeInfo, tab) {
  if (
    changeInfo.status == "complete" &&
    tab.title?.toLowerCase().includes("vitesicure")
  ) {
    const savedOptions = await optionsStorage.getAll();
    const tabIds: string[] = savedOptions.vitesicureTabIds
      ? JSON.parse(savedOptions.vitesicureTabIds as string)
      : [];

    if (!tabIds.includes(tabId.toString())) {
      optionsStorage.set({
        vitesicureTabIds: JSON.stringify(tabIds.concat([tabId.toString()])),
      });
    }

    if (savedOptions.showPathBox) {
      sendMessage(
        "load-path-box",
        {},
        { context: "content-script", tabId: tabId },
      );
    }
  }
});

browser.tabs.onRemoved.addListener(async function (tabId, removeInfo) {
  const savedOptions = await optionsStorage.getAll();
  const tabs: string[] = JSON.parse(savedOptions.vitesicureTabIds as string);
  if (tabs.includes(tabId.toString())) {
    console.log("removing tab id", tabId);
    tabs.splice(tabs.indexOf(tabId.toString()), 1);
    optionsStorage.set({
      vitesicureTabIds: JSON.stringify(tabs),
    });
  }
});
