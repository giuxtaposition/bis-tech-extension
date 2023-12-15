import { sendMessage as sendMessageFromBackground } from "webext-bridge/background";
import { sendMessage as sendMessageFromPopup } from "webext-bridge/popup";
import { sendMessage as sendMessageFromContentScript } from "webext-bridge/content-script";
import type { MessagingClient } from "./messengerService";
import { Location } from "./messengerService";

class WebextBridge implements MessagingClient {
  public sendMessageFromPopup(
    message: string,
    content: any,
    destination: Location,
    tabId: string,
  ) {
    sendMessageFromPopup(message, content, {
      context: destination,
      tabId: parseInt(tabId),
    });
  }
  public sendMessageFromBackground(
    message: string,
    content: any,
    destination: Location,
    tabId: string,
  ) {
    sendMessageFromBackground(message, content, {
      context: destination,
      tabId: parseInt(tabId),
    });
  }
  public sendMessageFromContentScript(
    message: string,
    content: any,
    destination: Location,
    tabId: string,
  ) {
    sendMessageFromContentScript(message, content, {
      context: destination,
      tabId: parseInt(tabId),
    });
  }
}

export default WebextBridge;
