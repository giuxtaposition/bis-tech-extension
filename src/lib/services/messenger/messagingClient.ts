import type { MessagingClient } from "./messengerService";
import browser from "webextension-polyfill";

class BrowserMessagingClient implements MessagingClient {
  public async sendMessage(message: string, content: any, tabId: string) {
    browser.tabs.sendMessage(parseInt(tabId), { message, content });
  }
}

export default BrowserMessagingClient;
