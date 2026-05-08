import MessagingService from "../services/messagingService/messagingService";
import FakeDataService from "../services/fakeDataService";

export default abstract class Page {
  private static readonly FIELD_STRATEGIES: Array<{
    matches: (name: string) => boolean;
    getValue: () => string;
  }> = [
    // Business (before generic name to avoid businessName matching name pattern)
    { matches: (n) => /businessName$/.test(n), getValue: () => "Pinco Pallino SRL" },
    { matches: (n) => /vatNumber$/.test(n), getValue: () => "34926370544" },
    { matches: (n) => /atecoCode$/.test(n), getValue: () => "81.21" },
    { matches: (n) => /relationship$/.test(n), getValue: () => "EMPLOYER" },

    // Person identity
    {
      matches: (n) =>
        /(?:^|\.)(?:first)?name$/i.test(n) &&
        !/(?:city|province|state)\.name$/i.test(n),
      getValue: () => FakeDataService.firstName(),
    },
    { matches: (n) => /(?:surname|lastName)$/i.test(n), getValue: () => FakeDataService.lastName() },
    { matches: (n) => /email$/i.test(n), getValue: () => FakeDataService.email() },
    { matches: (n) => /(?:phone|phoneNumber)$/i.test(n), getValue: () => FakeDataService.phone() },
    { matches: (n) => /birthDate$/i.test(n), getValue: () => FakeDataService.birthdate(74) },
    { matches: (n) => /(?:birthCity|cityOfBirth)$/i.test(n), getValue: () => FakeDataService.city() },
    { matches: (n) => /gender$/i.test(n), getValue: () => "MALE" },
    { matches: (n) => /maritalStatus$/i.test(n), getValue: () => "SINGLE" },
    { matches: (n) => /familyUnitType$/i.test(n), getValue: () => "SINGLE" },

    // Document
    { matches: (n) => /document\.type$/i.test(n), getValue: () => "PASSPORT" },
    { matches: (n) => /document\.code$/i.test(n), getValue: () => "ASD123" },
    { matches: (n) => /document\.releaseDate$/i.test(n), getValue: () => "01/01/2020" },
    { matches: (n) => /document\.expireDate$/i.test(n), getValue: () => "01/01/2030" },
    { matches: (n) => /document\.releasePlace$/i.test(n), getValue: () => FakeDataService.city() },
    { matches: (n) => /document\.releaseAuthority$/i.test(n), getValue: () => "PREFECTURE" },

    // Address
    { matches: (n) => /(?:^|\.)street$/i.test(n), getValue: () => FakeDataService.street() },
    { matches: (n) => /streetNumber$/i.test(n), getValue: () => "99" },
    { matches: (n) => /postalCode$/i.test(n), getValue: () => "20100" },
    { matches: (n) => /(?:^|\.)city(?:\.name)?$/i.test(n), getValue: () => "Milano" },
    { matches: (n) => /(?:^|\.)province(?:\.name)?$/i.test(n), getValue: () => "MI" },
    { matches: (n) => /(?:^|\.)state(?:\.name)?$/i.test(n), getValue: () => "Italia" },

    // Payment
    { matches: (n) => /iban$/i.test(n), getValue: () => "IT87D0300203280616976634975" },
    { matches: (n) => /sourceOfFunds$/i.test(n), getValue: () => "EMPLOYMENT_INCOME" },
  ];

  static path: string;
  protected debugMode = false;

  constructor() {
    MessagingService.listen("set-debug-mode", () => {
      this.debugMode = true;
    });

    MessagingService.listen("unset-debug-mode", () => {
      this.debugMode = false;
    });
  }

  protected clickWithXpath(xpath: string) {
    const element = document.evaluate(
      xpath,
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null,
    ).singleNodeValue as HTMLElement;

    if (!element) {
      return;
    }

    this.simulateMouseClick(element);
  }

  protected clickMultiples(selector: string) {
    const buttons = document.querySelectorAll<HTMLButtonElement>(selector);
    buttons.forEach((button) => this.simulateMouseClick(button));
  }

  protected smartAutofill(): void {
    document.querySelectorAll<HTMLInputElement>("input[name]").forEach((input) => {
      const strategy = Page.FIELD_STRATEGIES.find((s) => s.matches(input.name));
      if (strategy) this.fillInput(input, strategy.getValue());
    });
  }

  protected changeInputValue(inputSelector: string, value: string) {
    const input = this.getInput(inputSelector);
    if (!input) return;
    this.fillInput(input, value);
  }

  private fillInput(input: HTMLInputElement, value: string): void {
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      "value",
    )?.set;
    nativeInputValueSetter?.call(input, value);
    input.dispatchEvent(new Event("input", { bubbles: true }));
    input.dispatchEvent(new Event("focusout", { bubbles: true }));
    if (this.debugMode) {
      console.info(`Changed input ${input.name} to ${value}`);
    }
  }

  protected clickInputElement(inputSelector: string) {
    const input = this.getInput(inputSelector);

    if (!input) {
      return;
    }

    this.simulateMouseClick(input);
  }

  protected simulateMouseClick(element: HTMLElement) {
    const mouseClickEvents = ["mousedown", "click", "mouseup"];
    mouseClickEvents.forEach((mouseEventType) =>
      element.dispatchEvent(
        new MouseEvent(mouseEventType, {
          view: window,
          bubbles: true,
          cancelable: true,
          buttons: 1,
        }),
      ),
    );
  }

  protected getInput(inputSelector: string): HTMLInputElement | null {
    return document.querySelector<HTMLInputElement>(inputSelector);
  }

  protected async withDelay(f: () => any, delay: number = 200) {
    const timeout = () => new Promise((resolve) => setTimeout(resolve, delay));

    await timeout();
    return f();
  }

  public abstract autofill(): Promise<void>;

  public goToNextPage() {
    const allButtons = document.querySelectorAll<HTMLButtonElement>("button");
    for (const button of allButtons) {
      const buttonText = button.innerText.toLowerCase();
      if (
        buttonText.includes("continua") ||
        buttonText.includes("calcola preventivo") ||
        buttonText.includes("salva preventivo") ||
        buttonText.includes("ottieni la tua polizza")
      ) {
        this.simulateMouseClick(button);
        return;
      }
    }
  }
}
