import browser from "webextension-polyfill";
import OptionsSyncStorage from "../../lib/services/storage";
import MessengerService, {
  Location,
} from "../../lib/services/messenger/messengerService";
import WebextBridge from "../../lib/services/messenger/webextBridge";

browser.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");
});

const storage = OptionsSyncStorage.getInstance();
const messenger = new MessengerService(new WebextBridge(), storage);

browser.tabs.onUpdated.addListener(async function (tabId, changeInfo, tab) {
  if (
    changeInfo.status == "complete" &&
    tab.title?.toLowerCase().includes("vitesicure")
  ) {
    const tabIds: string[] = (await storage.get("vitesicureTabIds")) ?? [];

    if (!tabIds.includes(tabId.toString())) {
      storage.set("vitesicureTabIds", tabIds.concat([tabId.toString()]));
    }

    if (storage.get("showPathBox")) {
      messenger.send(
        Location.Background,
        Location.ContentScript,
        "load-path-box",
      );
    }
  }
});

browser.tabs.onRemoved.addListener(async function (tabId, _removeInfo) {
  const tabs: string[] = (await storage.get("vitesicureTabIds")) ?? [];
  if (tabs.includes(tabId.toString())) {
    tabs.splice(tabs.indexOf(tabId.toString()), 1);
    storage.set("vitesicureTabIds", tabs);
  }
});
