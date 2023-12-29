import FakeDataService from "../../services/fakeDataService";
import Page from "../page";

export default class YourOfferPage extends Page {
  public static path: string = "la-tua-offerta";

  private name = "input[name='customerInfo.firstName']";
  private surname = "input[name='customerInfo.lastName']";
  private email = "input[name='customerInfo.email']";
  private phone = "input[name='customerInfo.phoneNumber']";
  private privacyPolicy = "input[name='agreements.privacyPolicyBroker']";

  async autofill(): Promise<void> {
    this.changeInputValue(this.name, FakeDataService.firstName());
    this.changeInputValue(this.surname, FakeDataService.lastName());
    this.changeInputValue(this.email, FakeDataService.email());
    this.changeInputValue(this.phone, FakeDataService.phone());
    this.clickInputElement(this.privacyPolicy);
  }
}
