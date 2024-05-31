import MessagingService from "../services/messagingService/messagingService";

export default abstract class Page {
  static path: string;
  protected debugMode: boolean;

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

  protected changeInputValue(inputSelector: string, value: string) {
    const input = this.getInput(inputSelector);

    if (!input) {
      return;
    }

    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      "value",
    ).set;
    nativeInputValueSetter.call(input, value);

    const inputEvent = new Event("input", { bubbles: true });
    input.dispatchEvent(inputEvent);

    const blurEvent = new Event("blur", { bubbles: true });
    input.dispatchEvent(blurEvent);

    if (this.debugMode) {
      console.info(`Changed input ${inputSelector} to ${value}`);
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
    const lastButton = allButtons[allButtons.length - 1];
    this.simulateMouseClick(lastButton);
  }
}
