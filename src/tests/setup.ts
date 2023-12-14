// beforeAll(() => {
//   const chromeMock = {
//     tabs: {
//       query: vi.fn((_queryInfo, callback) => {
//         callback([{ id: 123 }]);
//       }),
//       // eslint-disable-next-line @typescript-eslint/no-unused-vars
//       create: vi.fn(({ url }: { url: string }) => {}),
//     },
//     sidePanel: {
//       open: vi.fn(),
//     },
//     commands: {
//       getAll: vi.fn(() => {
//         return [];
//       }),
//     },
//   };
//
//   vi.stubGlobal("chrome", chromeMock);
// });
