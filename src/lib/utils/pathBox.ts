import { sendMessage } from "webext-bridge/popup";
import optionsStorage from "../../entries/background/optionsStorage";

export class PathBox {
  public static async sendMessageFromPopup(showPathBox: boolean) {
    const savedOptions = await optionsStorage.getAll();
    if (!showPathBox) {
      sendMessage(
        "remove-path-box",
        {},
        {
          context: "content-script",
          tabId: savedOptions.vitesicureTabId as number,
        },
      );
    } else {
      sendMessage(
        "load-path-box",
        {},
        {
          context: "content-script",
          tabId: savedOptions.vitesicureTabId as number,
        },
      );
    }
  }

  public static async saveShowPathBox(showPathBox: boolean) {
    await optionsStorage.set({ showPathBox });
  }
}
