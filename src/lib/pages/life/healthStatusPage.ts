import Page from "../page";

export default class HealthStatusPage extends Page {
  public static path: string = "stato-di-salute";

  private height = 'input[name="height"]';
  private weight = 'input[name="weight"]';
  private privacyPolicy = 'input[name="privacyPolicyAccepted"]';
  private questions = "div[data-testid] button:nth-child(2)";

  async autofill(): Promise<void> {
    this.changeInputValue(this.height, "170");
    this.changeInputValue(this.weight, "80");
    if (!this.getInput(this.privacyPolicy).checked)
      this.clickInputElement(this.privacyPolicy);
    this.clickMultiples(this.questions);
  }
}
