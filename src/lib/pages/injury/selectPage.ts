import Page from "../page";

export default class SelectPage extends Page {
  public static path: string = "seleziona";

  private protectMe = "div[data-testid='injury-select-me']";

  async autofill(): Promise<void> {
    this.clickInputElement(this.protectMe);
  }
}
