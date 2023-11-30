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
        case EventType.ClickNthChild:
          this.clickNthChild(key, field.child);
          break;
      }
    });
  }

  private static clickNthChild(selector: string, child: number) {
    document.querySelectorAll(selector)[child];
  }

  private static clickWithXpath(xpath: string) {
    const element = document.evaluate(
      xpath,
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null,
    ).singleNodeValue as HTMLElement;
    console.log("xpath", element);

    this.simulateMouseClick(element);
  }

  private static clickMultiples(selector: string) {
    const buttons = document.querySelectorAll<HTMLButtonElement>(selector);
    buttons.forEach((button) => this.simulateMouseClick(button));
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

    this.simulateMouseClick(input);
  }

  private static simulateMouseClick(element: HTMLElement) {
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

  private static getInput(inputSelector: string): HTMLInputElement {
    return document.querySelector<HTMLInputElement>(inputSelector);
  }
}

export default AutoFillService;
