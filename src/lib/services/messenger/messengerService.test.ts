import MessengerService from "./messengerService";
import { Location } from "./messengerService";

describe("messengerService", () => {
  let messageService: MessengerService;

  const mockedMessagingClient = {
    sendMessageFromPopup: vi.fn(),
    sendMessageFromBackground: vi.fn(),
    sendMessageFromContentScript: vi.fn(),
  };

  const mockedStorage = {
    getAll: vi.fn(),
    get: vi.fn(),
    set: vi.fn(),
  };

  beforeAll(() => {
    messageService = new MessengerService(mockedMessagingClient, mockedStorage);
  });

  it.each([
    {
      from: Location.Popup,
      to: Location.Background,
      fn: mockedMessagingClient.sendMessageFromPopup,
    },
    {
      from: Location.Popup,
      to: Location.ContentScript,
      fn: mockedMessagingClient.sendMessageFromPopup,
    },
    {
      from: Location.Background,
      to: Location.ContentScript,
      fn: mockedMessagingClient.sendMessageFromBackground,
    },
    {
      from: Location.Background,
      to: Location.Popup,
      fn: mockedMessagingClient.sendMessageFromBackground,
    },
    {
      from: Location.ContentScript,
      to: Location.Background,
      fn: mockedMessagingClient.sendMessageFromContentScript,
    },
    {
      from: Location.ContentScript,
      to: Location.Popup,
      fn: mockedMessagingClient.sendMessageFromContentScript,
    },
  ])("should send message from and to correctly", async ({ from, to, fn }) => {
    mockedStorage.get.mockResolvedValueOnce(["tabId"]);
    messageService.send(from, to, "messageTest", {
      myContent: "test",
    });

    await vi.waitFor(() => {
      expect(fn).toHaveBeenCalledWith(
        "messageTest",
        { myContent: "test" },
        to,
        "tabId",
      );
    });
  });
});
