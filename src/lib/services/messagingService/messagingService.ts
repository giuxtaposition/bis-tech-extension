import { getCurrentTab, listenForMessage, sendMessage } from "../browser";

export type MessageMap = {
  "auto-fill": { goToNextPage?: boolean };
  "set-debug-mode": Record<string, never>;
  "unset-debug-mode": Record<string, never>;
  "load-path-box": Record<string, never>;
  "remove-path-box": Record<string, never>;
};

type MessageKey = keyof MessageMap;

class MessagingService {
  public static async send<K extends MessageKey>(
    message: K,
    content: MessageMap[K] = {} as MessageMap[K],
  ) {
    const tab = await getCurrentTab();
    await sendMessage(message, content, tab.id!);
  }

  public static listen<K extends MessageKey>(
    message: K,
    callback: (content: MessageMap[K]) => void,
  ) {
    listenForMessage(message, callback);
  }
}

export default MessagingService;
