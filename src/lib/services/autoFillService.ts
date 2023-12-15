import AutoFillDataService, { EventType } from "./autoFillDataService";

class AutoFillService {
  public static async autofill(
    product: string,
    page: string,
    goToNextPage?: boolean,
  ) {
    const toAutoFill = AutoFillDataService.getAutoFillData(product, page);

    if (!toAutoFill) {
      console.warn("No autofill data found");
      return;
    }

    for (const field of Object.values(toAutoFill)) {
      console.log("field", field);
      await AutoFillService.executeEvent(
        field.event,
        field.selector,
        field.value,
        field.child,
        field.withDelay,
      );
    }

    if (goToNextPage) {
      this.goToNextPage();
    }
  }

  private static async executeEvent(
    event: EventType,
    key: string,
    value?: string,
    child?: number,
    withDelay = false,
  ) {
    const timer = (ms: number) => new Promise((res) => setTimeout(res, ms));

    try {
      switch (event) {
        case EventType.Change:
          this.changeInputValue(key, value);
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
          this.clickNthChild(key, child);
          break;
      }
    } catch (error) {
      console.error(`could not fill with ${key}`, error);
    }

    if (withDelay) {
      await timer(200);
    }
  }

  private static goToNextPage() {
    const allButtons = document.querySelectorAll<HTMLButtonElement>("button");
    const lastButton = allButtons[allButtons.length - 1];
    this.simulateMouseClick(lastButton);
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

    this.simulateMouseClick(element);
  }

  private static clickMultiples(selector: string) {
    const buttons = document.querySelectorAll<HTMLButtonElement>(selector);
    buttons.forEach((button) => this.simulateMouseClick(button));
  }

  private static changeInputValue(inputSelector: string, value: string) {
    const input = this.getInput(inputSelector);
    console.log("input", input);
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      "value",
    ).set;
    nativeInputValueSetter.call(input, value);

    const inputEvent = new Event("input", { bubbles: true });
    input.dispatchEvent(inputEvent);

    const blurEvent = new Event("blur", { bubbles: true });
    input.dispatchEvent(blurEvent);
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
