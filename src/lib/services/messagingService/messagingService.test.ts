import MessagingService from "./messagingService";
import * as browser from "../browser";

describe("MessagingService", () => {
  const browserSendMessage = vi.spyOn(browser, "sendMessage");

  it("sendMessage should send message to current tab", async () => {
    MessagingService.send("messageTest", {
      myContent: "test",
    });

    await vi.waitFor(() => {
      expect(browserSendMessage).toHaveBeenCalledWith(
        "messageTest",
        {
          myContent: "test",
        },
        1,
      );
    });
  });
});
