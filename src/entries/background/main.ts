import browser from "webextension-polyfill";
import OptionsSyncStorage from "../../lib/services/storage";
import TabsService from "../../lib/services/tabsService";

const storage = OptionsSyncStorage.getInstance();
const tabs = new TabsService(storage);

browser.tabs.onUpdated.addListener(async function (tabId, changeInfo, tab) {
  if (
    changeInfo.status == "complete" &&
    (tab.title?.toLowerCase().includes("vitesicure") ||
      tab.title?.toLowerCase().includes("bridge insurance services"))
  ) {
    await tabs.addTab(tabId.toString());
  }
});

browser.tabs.onRemoved.addListener(async function (tabId, _removeInfo) {
  await tabs.removeTab(tabId.toString());
});
