import { getCurrentTab, listenForMessage, sendMessage } from "../browser";

class MessagingService {
  public static async send(message: string, content: any = {}) {
    const tab = await getCurrentTab();
    await sendMessage(message, content, tab.id);
  }

  public static async listen(
    message: string,
    callback: (content: any) => void,
  ) {
    listenForMessage(message, callback);
  }
}

export default MessagingService;
