import browser from "webextension-polyfill";
import type { MessageMap } from "./messagingService/messagingService";

type MessageKey = keyof MessageMap;

export const getCurrentTab = async () => {
  const [tab] = await browser.tabs.query({ active: true, currentWindow: true });
  return tab;
};

export const sendMessage = async <K extends MessageKey>(
  message: K,
  content: MessageMap[K],
  tabId: number,
) => {
  await browser.tabs.sendMessage(tabId, { message, content });
};

export const listenForMessage = <K extends MessageKey>(
  message: K,
  callback: (content: MessageMap[K]) => void,
) => {
  browser.runtime.onMessage.addListener((listenerMessage: unknown) => {
    const msg = listenerMessage as { message: string; content: MessageMap[K] };
    if (msg.message === message) {
      callback(msg.content);
    }
  });
};
