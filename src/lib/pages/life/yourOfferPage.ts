import FakeDataService from "../../services/fakeDataService";
import Page from "../page";
import { LIFE_PAGES } from "../constants";

export default class YourOfferPage extends Page {
  public static path: string = LIFE_PAGES.YOUR_OFFER;

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
    this.clickInputElement(this.privacyPolicy);
  }
}
