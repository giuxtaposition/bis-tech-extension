import FakeDataService from "../../services/fakeDataService";
import Page from "../page";

export default class YourOfferPage extends Page {
  public static path: string = "la-tua-offerta";

  private name = "input[name='contacts.name']";
  private surname = "input[name='contacts.surname']";
  private email = "input[name='contacts.email']";
  private phone = "input[name='contacts.phone']";
  private privacyPolicy = "input[name='contacts.privacyPolicyAccepted']";

  async autofill(): Promise<void> {
    this.changeInputValue(this.name, FakeDataService.firstName());
    this.changeInputValue(this.surname, FakeDataService.lastName());
    this.changeInputValue(this.email, FakeDataService.email());
    this.changeInputValue(this.phone, FakeDataService.phone());
    if (!this.getInput(this.privacyPolicy).checked)
      this.clickInputElement(this.privacyPolicy);
  }
}
