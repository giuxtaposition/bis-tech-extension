import Page from "../page";
import { INJURY_PAGES } from "../constants";

export default class SelectPage extends Page {
  public static path: string = INJURY_PAGES.SELECT;

  private protectMe = "div[data-testid='injury-select-me']";

  async autofill(): Promise<void> {
    this.clickInputElement(this.protectMe);
  }
}
