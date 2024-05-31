import browser from "webextension-polyfill";

export const getCurrentTab = async () => {
  const [tab] = await browser.tabs.query({ active: true, currentWindow: true });
  return tab;
};

export const sendMessage = async (
  message: string,
  content: any,
  tabId: number,
) => {
  await browser.tabs.sendMessage(tabId, { message, content });
};

export const listenForMessage = (
  message: string,
  callback: (content: any) => void,
) => {
  browser.runtime.onMessage.addListener((listenerMessage) => {
    if (listenerMessage.message === message) {
      callback(listenerMessage.content);
    }
  });
};
