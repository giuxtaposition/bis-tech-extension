import Page from "../page";
import { LIFE_PAGES } from "../constants";

export default class HealthStatusPage extends Page {
  public static path: string = LIFE_PAGES.HEALTH_STATUS;

  private height = 'input[name="height"]';
  private weight = 'input[name="weight"]';
  private privacyPolicy = 'input[name="privacyPolicyAccepted"]';
  private questions = "div[data-testid] button:nth-child(2)";

  async autofill(): Promise<void> {
    this.changeInputValue(this.height, "170");
    this.changeInputValue(this.weight, "80");
    this.clickInputElement(this.privacyPolicy);
    this.clickMultiples(this.questions);
  }
}
