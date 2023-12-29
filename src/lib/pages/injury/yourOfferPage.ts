import FakeDataService from "../../services/fakeDataService";
import Page from "../page";

export default class YourOfferPage extends Page {
  public static path: string = "la-tua-polizza-infortuni";

  private birthDate = "input[name='data.insuredList[0].birthDate']";
  private name = "input[name='contractor.firstName']";
  private surname = "input[name='contractor.lastName']";
  private email = "input[name='contractor.email']";
  private phone = "input[name='contractor.phoneNumber']";
  private privacyPolicy = "input[name='agreements.privacyPolicy']";

  autofill(): void {
    this.withDelay(() => {
      this.changeInputValue(this.birthDate, FakeDataService.birthdate());
    });
    this.withDelay(() => {
      this.changeInputValue(this.name, FakeDataService.firstName());
    });
    this.withDelay(() => {
      this.changeInputValue(this.surname, FakeDataService.lastName());
    });
    this.withDelay(() => {
      this.changeInputValue(this.email, FakeDataService.email());
    });
    this.withDelay(() => {
      this.changeInputValue(this.phone, FakeDataService.phone());
    });
    this.withDelay(() => {
      this.clickInputElement(this.privacyPolicy);
    });
  }
}
