import MessengerService from "./messengerService";

describe("messengerService", () => {
  let messageService: MessengerService;

  const mockedMessagingClient = {
    sendMessage: vi.fn(),
  };

  const mockedTabsService = {
    getTabs: vi.fn(),
  } as any;

  beforeAll(() => {
    messageService = new MessengerService(
      mockedMessagingClient,
      mockedTabsService,
    );
  });

  it("sendMessage should send message to each saved tab", async () => {
    mockedTabsService.getTabs.mockResolvedValueOnce(["tabId1", "tabId2"]);
    messageService.send("messageTest", {
      myContent: "test",
    });

    await vi.waitFor(() => {
      expect(mockedMessagingClient.sendMessage).toHaveBeenCalledWith(
        "messageTest",
        { myContent: "test" },
        "tabId1",
      );
      expect(mockedMessagingClient.sendMessage).toHaveBeenCalledWith(
        "messageTest",
        { myContent: "test" },
        "tabId2",
      );
    });
  });
});
