import { Product } from "../../types";
import AutoFillDataService, {
  EventType,
  LifePage,
} from "./autoFillDataService";
import AutoFillService from "./autoFillService";
import { screen } from "@testing-library/dom";

//TODO: is this possible?
describe.skip("autoFillService", () => {
  beforeAll(() => {
    vi.spyOn(AutoFillDataService, "getAutoFillData").mockReturnValue({
      name: {
        value: "Wednesday",
        event: EventType.Change,
        selector: "input[name='firstName']",
      },
      // surname: {
      //   value: "Addams",
      //   event: EventType.Change,
      //   selector: "input[name='lastName']",
      // },
      // email: {
      //   value: "wednesday@addams.com",
      //   event: EventType.Change,
      //   selector: "input[name='email']",
      // },
      // phone: {
      //   value: "3333333333",
      //   event: EventType.Change,
      //   selector: "input[name='phone']",
      // },
      // privacyPolicy: {
      //   event: EventType.Click,
      //   selector: "input[name='privacyPolicyBroker']",
      // },
    });

    const firstName = createInputWithName("firstName");
    // const lastName = createInputWithName("lastName");
    // const email = createInputWithName("email");
    // const phone = createInputWithName("phone");
    // const privacyPolicy = createInputWithName("privacyPolicy");

    document.body.appendChild(firstName);
    // document.body.appendChild(lastName);
    // document.body.appendChild(email);
    // document.body.appendChild(phone);
    // document.body.appendChild(privacyPolicy);
  });

  function createInputWithName(name: string) {
    const input = document.createElement("input");
    input.setAttribute("name", name);
    return input;
  }

  describe("autofill", () => {
    it("should execute change event correctly", async () => {
      AutoFillService.autofill(Product.SquareLife, LifePage.YourOffer);

      await vi.waitUntil(() => {
        expect(screen.getByRole("textbox")).toHaveValue("Wednesday");
        expect(screen.getByRole("textbox")).toHaveTextContent("Wednesday");
      });
    });
  });
});
