import FakeDataService from "../../services/fakeDataService";
import Page from "../page";

export default class PreventivatorePage extends Page {
  public static path: string = "preventivatore";

  private birthDate = "input[name='customerInfo.birthDate']";
  private smoker = "input[name='data.smoker'][value='N']";
  private privacyPolicy = "input[name='agreements.privacyPolicy']";

  async autofill(): Promise<void> {
    this.changeInputValue(this.birthDate, FakeDataService.birthdate());
    await this.withDelay(() => {
      this.clickInputElement(this.smoker);
    });
    await this.withDelay(() => {
      this.clickInputElement(this.privacyPolicy);
    });
  }
}
