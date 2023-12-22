import browser from "webextension-polyfill";
import OptionsSyncStorage from "../../lib/services/storage";
import MessengerService, {
  Location,
} from "../../lib/services/messenger/messengerService";
import WebextBridge from "../../lib/services/messenger/webextBridge";
import TabsService from "../../lib/services/tabsService";

browser.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");
});

const storage = OptionsSyncStorage.getInstance();
const messenger = new MessengerService(new WebextBridge(), storage);
const tabs = new TabsService(storage);

browser.tabs.onUpdated.addListener(async function (tabId, changeInfo, tab) {
  if (
    changeInfo.status == "complete" &&
    tab.title?.toLowerCase().includes("vitesicure")
  ) {
    await tabs.addTab(tabId.toString());

    if (await storage.get("showPathBox")) {
      messenger.send(
        Location.Background,
        Location.ContentScript,
        "load-path-box",
      );
    }
  }
});

browser.tabs.onRemoved.addListener(async function (tabId, _removeInfo) {
  await tabs.removeTab(tabId.toString());
});
