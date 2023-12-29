import Page from "../page";

export default class HealthStatusPage extends Page {
  public static path: string = "stato-di-salute";

  private privacyPolicy =
    '//*[text()[contains(.,"Ai sensi della vigente normativa sulla Privacy,")]]/../../..//button[1]';
  private questions = "div[data-testid] button:nth-child(2)";

  async autofill(): Promise<void> {
    this.clickWithXpath(this.privacyPolicy);
    this.clickMultiples(this.questions);
  }
}
