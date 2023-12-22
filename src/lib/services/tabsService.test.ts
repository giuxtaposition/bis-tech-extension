import TabsService from "./tabsService";

describe("tabsService", () => {
  const mockedStorage = {
    get: vi.fn(),
    getAll: vi.fn(),
    set: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("getTabs should return a list of tab ids", async () => {
    const tabs = ["1", "2", "3"];
    mockedStorage.get.mockResolvedValueOnce(tabs);
    const tabsService = new TabsService(mockedStorage);

    const result = await tabsService.getTabs();

    expect(result).toEqual(tabs);
  });

  describe("removeTab", () => {
    it("should remove the tab id from the list", async () => {
      mockedStorage.get.mockResolvedValueOnce(["1", "2", "3"]);
      const tabsService = new TabsService(mockedStorage);

      await tabsService.removeTab("2");

      expect(mockedStorage.set).toHaveBeenCalledWith("vitesicureTabIds", [
        "1",
        "3",
      ]);
    });

    it("should do nothing if tab id is not present", async () => {
      mockedStorage.get.mockResolvedValueOnce(["1", "2"]);
      const tabsService = new TabsService(mockedStorage);

      await tabsService.removeTab("3");

      expect(mockedStorage.set).not.toHaveBeenCalled();
    });
  });

  describe("addTab", () => {
    it("should add the tab id to the list", async () => {
      mockedStorage.get.mockResolvedValueOnce(["1", "2", "3"]);
      const tabsService = new TabsService(mockedStorage);

      await tabsService.addTab("4");

      expect(mockedStorage.set).toHaveBeenCalledWith("vitesicureTabIds", [
        "1",
        "2",
        "3",
        "4",
      ]);
    });

    it("should do nothing if tab id is already present in the list", async () => {
      mockedStorage.get.mockResolvedValueOnce(["1", "2", "3"]);
      const tabsService = new TabsService(mockedStorage);

      await tabsService.addTab("3");

      expect(mockedStorage.set).not.toHaveBeenCalled();
    });
  });
});
