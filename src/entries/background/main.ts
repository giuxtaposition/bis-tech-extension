import browser from "webextension-polyfill";
import OptionsSyncStorage from "../../lib/services/storage";
import MessengerService from "../../lib/services/messenger/messengerService";
import MessagingClient from "../../lib/services/messenger/messagingClient";
import TabsService from "../../lib/services/tabsService";

browser.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");
});

const storage = OptionsSyncStorage.getInstance();
const tabs = new TabsService(storage);
const messenger = new MessengerService(new MessagingClient(), tabs);

browser.tabs.onUpdated.addListener(async function (tabId, changeInfo, tab) {
  if (
    changeInfo.status == "complete" &&
    tab.title?.toLowerCase().includes("vitesicure")
  ) {
    await tabs.addTab(tabId.toString());

    if (await storage.get("showPathBox")) {
      messenger.send("load-path-box");
    }
  }
});

browser.tabs.onRemoved.addListener(async function (tabId, _removeInfo) {
  await tabs.removeTab(tabId.toString());
});
