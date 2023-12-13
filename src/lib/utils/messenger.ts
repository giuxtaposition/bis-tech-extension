import { sendMessage as sendMessageFromBackground } from "webext-bridge/background";
import { sendMessage as sendMessageFromPopup } from "webext-bridge/popup";
import { sendMessage as sendMessageFromContentScript } from "webext-bridge/background";
import optionsStorage from "../../entries/background/optionsStorage";

export enum Location {
  Popup = "popup",
  ContentScript = "content-script",
  Background = "background",
}

class Messenger {
  public static async send(
    from: Location,
    to: Location,
    message: string,
    content: any = {},
  ) {
    const savedOptions = await optionsStorage.getAll();
    const tabs: string[] = JSON.parse(savedOptions.vitesicureTabIds as string);
    for (const tabId of tabs) {
      switch (from) {
        case Location.Popup:
          sendMessageFromPopup(message, content, {
            context: to,
            tabId: tabId as number,
          });
          break;
        case Location.ContentScript:
          sendMessageFromContentScript(message, content, {
            context: to,
            tabId: tabId as number,
          });
          break;
        case Location.Background:
          sendMessageFromBackground(message, content, {
            context: to,
            tabId: tabId as number,
          });
          break;

        default:
          break;
      }
    }
  }
}

export default Messenger;
