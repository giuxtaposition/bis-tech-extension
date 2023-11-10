import browser from "webextension-polyfill";
import { sendMessage } from "webext-bridge/background";
// eslint-disable-next-line import/no-unassigned-import
import optionsStorage from "./optionsStorage";

browser.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");
});

browser.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (
    changeInfo.status == "complete" &&
    tab.title?.toLowerCase().includes("vitesicure")
  ) {
    sendMessage(
      "load-path-box",
      {},
      { context: "content-script", tabId: tabId },
    );
  }
});
