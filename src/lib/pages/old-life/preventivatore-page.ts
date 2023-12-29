import FakeDataService from "../../services/fakeDataService";
import Page from "../page";

export default class PreventivatorePage extends Page {
  public static path: string = "preventivatore";

  private birthDate = "input[name='customerInfo.birthDate']";
  private smoker = "input[name='data.smoker'][value='N']";
  private privacyPolicy = "input[name='agreements.privacyPolicy']";

  autofill(): void {
    this.changeInputValue(this.birthDate, FakeDataService.birthdate());

    this.clickInputElement(this.smoker);
    this.clickInputElement(this.privacyPolicy);
  }
}
