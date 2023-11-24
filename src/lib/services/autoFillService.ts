import autofillData, { EventType } from "./autoFillData";

class AutoFillService {
  public static autofill(product: string, page: string) {
    const toAutoFill = autofillData[product][page];

    console.log("toAutoFill", toAutoFill);

    if (!toAutoFill) {
      console.warn("No autofill data found");
      return;
    }

    Object.keys(toAutoFill).forEach((key) => {
      const field = toAutoFill[key];

      switch (field.event) {
        case EventType.Change:
          this.changeInputValue(key, field.value);
          break;
        case EventType.Click:
          this.clickInputElement(key);
          break;
        case EventType.ClickMultiples:
          this.clickMultiples(key);
        case EventType.ClickWithXpath:
          this.clickWithXpath(key);
          break;
      }
    });
  }

  private static clickWithXpath(xpath: string) {
    const element = document.evaluate(
      xpath,
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null,
    ).singleNodeValue as HTMLElement;

    element.click();
  }

  private static clickMultiples(selector: string) {
    const buttons = document.querySelectorAll<HTMLButtonElement>(selector);
    buttons.forEach((button) => button.click());
  }

  private static changeInputValue(inputSelector: string, value: string) {
    const input = this.getInput(inputSelector);
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      "value",
    ).set;
    nativeInputValueSetter.call(input, value);

    const inputEvent = new Event("input", { bubbles: true });
    input.dispatchEvent(inputEvent);
  }

  private static clickInputElement(inputSelector: string) {
    const input = this.getInput(inputSelector);
    input.click();
  }

  private static getInput(inputSelector: string): HTMLInputElement {
    return document.querySelector<HTMLInputElement>(inputSelector);
  }
}

export default AutoFillService;
