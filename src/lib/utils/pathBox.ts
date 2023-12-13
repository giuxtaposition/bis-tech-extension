import { sendMessage } from "webext-bridge/popup";
import optionsStorage from "../../entries/background/optionsStorage";

export class PathBox {
  public static async sendMessageFromPopup(showPathBox: boolean) {
    const savedOptions = await optionsStorage.getAll();
    const tabIds: string[] = JSON.parse(
      savedOptions.vitesicureTabIds as string,
    );
    for (const tabId of tabIds) {
      if (!showPathBox) {
        sendMessage(
          "remove-path-box",
          {},
          {
            context: "content-script",
            tabId: parseInt(tabId),
          },
        );
      } else {
        sendMessage(
          "load-path-box",
          {},
          {
            context: "content-script",
            tabId: parseInt(tabId),
          },
        );
      }
    }
  }

  public static async saveShowPathBox(showPathBox: boolean) {
    await optionsStorage.set({ showPathBox });
  }
}
