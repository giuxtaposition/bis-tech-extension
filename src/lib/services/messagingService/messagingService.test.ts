import MessagingService from "./messagingService";
import * as browser from "../browser";

describe("MessagingService", () => {
  const browserSendMessage = vi.spyOn(browser, "sendMessage");

  it("sendMessage should send message to current tab", async () => {
    MessagingService.send("auto-fill", { goToNextPage: true });

    await vi.waitFor(() => {
      expect(browserSendMessage).toHaveBeenCalledWith(
        "auto-fill",
        { goToNextPage: true },
        1,
      );
    });
  });
});
