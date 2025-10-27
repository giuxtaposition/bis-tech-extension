import Page from "../page";
import { pagesPath } from "../paths";

export default class SelectPage extends Page {
  public static path: string = pagesPath.injury.select;

  private protectMe = "div[data-testid='injury-select-me']";

  async autofill(): Promise<void> {
    this.clickInputElement(this.protectMe);
  }
}
