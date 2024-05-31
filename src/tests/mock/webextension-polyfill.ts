const mockBrowser = {
  tabs: {
    sendMessage: vi.fn(),
    query: vi.fn().mockResolvedValue([
      {
        id: 1,
        index: 0,
        highlighted: false,
        active: false,
        pinned: false,
        incognito: false,
      },
    ]),
  },
  runtime: {
    onMessage: {
      addListener: vi.fn(),
    },
  },
};

export default mockBrowser;
