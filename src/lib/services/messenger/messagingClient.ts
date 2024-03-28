import type { MessagingClient } from "./messengerService";
import browser from "webextension-polyfill";

class BrowserMessagingClient implements MessagingClient {
  public async sendMessage(message: string, content: any, tabId: string) {
    browser.tabs.sendMessage(parseInt(tabId), { message, content });
  }

  public async listenForMessage(
    message: string,
    callback: (content: any) => void,
  ) {
    browser.runtime.onMessage.addListener((listenerMessage) => {
      if (listenerMessage.message === message) {
        callback(listenerMessage.content);
      }
    });
  }
}

export default BrowserMessagingClient;
