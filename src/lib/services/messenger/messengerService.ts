import { type IStorage } from "../storage";

class MessengerService {
  constructor(
    private readonly messagingClient: MessagingClient,
    private readonly storage: IStorage,
  ) {}

  public async send(
    from: Location,
    to: Location,
    message: string,
    content: any = {},
  ) {
    const tabs: string[] = await this.storage.get("vitesicureTabIds");
    for (const tabId of tabs) {
      switch (from) {
        case Location.Popup:
          this.messagingClient.sendMessageFromPopup(
            message,
            content,
            to,
            tabId,
          );
          break;
        case Location.ContentScript:
          this.messagingClient.sendMessageFromContentScript(
            message,
            content,
            to,
            tabId,
          );
          break;
        case Location.Background:
          this.messagingClient.sendMessageFromBackground(
            message,
            content,
            to,
            tabId,
          );
          break;

        default:
          break;
      }
    }
  }
}

export enum Location {
  Popup = "popup",
  ContentScript = "content-script",
  Background = "background",
}

export interface MessagingClient {
  sendMessageFromPopup: (
    message: string,
    content: any,
    destination: Location,
    tabId: string,
  ) => void;
  sendMessageFromContentScript: (
    message: string,
    content: any,
    destination: Location,
    tabId: string,
  ) => void;
  sendMessageFromBackground: (
    message: string,
    content: any,
    destination: Location,
    tabId: string,
  ) => void;
}

export default MessengerService;
