import type TabsService from "../tabsService";

class MessengerService {
  constructor(
    private readonly messagingClient: MessagingClient,
    private readonly tabs: TabsService,
  ) {}

  public async send(message: string, content: any = {}) {
    const tabs = await this.tabs.getTabs();
    for (const tabId of tabs) {
      this.messagingClient.sendMessage(message, content, tabId);
    }
  }
}

export interface MessagingClient {
  sendMessage: (message: string, content: any, tabId: string) => void;
}

export default MessengerService;
