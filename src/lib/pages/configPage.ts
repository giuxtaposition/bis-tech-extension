import Page from "./page";

export type Action =
  | { type: "fill"; selector: string; value: string }
  | { type: "click"; selector: string; delay?: boolean }
  | { type: "xpathClick"; selector: string; delay?: boolean }
  | { type: "clickMultiples"; selector: string; delay?: boolean }
  | { type: "checkbox"; selector: string; delay?: boolean };

export type PageConfig = {
  path: string;
  actions: Action[];
};

export default class ConfigPage extends Page {
  constructor(private config: PageConfig) {
    super();
  }

  async autofill(): Promise<void> {
    this.smartAutofill();
    for (const action of this.config.actions) {
      await this.execute(action);
    }
  }

  private async execute(action: Action): Promise<void> {
    const run = () => {
      switch (action.type) {
        case "fill":
          this.changeInputValue(action.selector, action.value);
          break;
        case "click":
          this.clickInputElement(action.selector);
          break;
        case "xpathClick":
          this.clickWithXpath(action.selector);
          break;
        case "clickMultiples":
          this.clickMultiples(action.selector);
          break;
        case "checkbox": {
          const input = this.getInput(action.selector);
          if (input && !input.checked) this.clickInputElement(action.selector);
          break;
        }
      }
    };

    if ("delay" in action && action.delay) {
      await this.withDelay(run);
    } else {
      run();
    }
  }
}
