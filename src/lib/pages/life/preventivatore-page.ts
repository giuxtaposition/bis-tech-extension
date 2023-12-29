import FakeDataService from "../../services/fakeDataService";
import Page from "../page";

export default class PreventivatorePage extends Page {
  public static path: string = "preventivatore";

  private birthDate = "input[name='birthDate']";
  private smoker = "input[name='smoker'][value='N']";
  private privacyPolicy = "input[name='privacyPolicyAccepted']";

  async autofill(): Promise<void> {
    this.changeInputValue(this.birthDate, FakeDataService.birthdate(74));

    this.clickInputElement(this.smoker);
    this.clickInputElement(this.privacyPolicy);
  }
}
