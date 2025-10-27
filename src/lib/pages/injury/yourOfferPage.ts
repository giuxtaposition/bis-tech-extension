import FakeDataService from "../../services/fakeDataService";
import Page from "../page";
import { pagesPath } from "../paths";

export default class YourOfferPage extends Page {
  public static path: string = pagesPath.injury.yourOffer

  private birthDate = "input[name='data.insuredList[0].birthDate']";
  private name = "input[name='contractor.firstName']";
  private surname = "input[name='contractor.lastName']";
  private email = "input[name='contractor.email']";
  private phone = "input[name='contractor.phoneNumber']";
  private privacyPolicy = "input[name='agreements.privacyPolicy']";

  async autofill(): Promise<void> {
    await this.withDelay(() => {
      this.changeInputValue(this.birthDate, FakeDataService.birthdate());
    });
    await this.withDelay(() => {
      this.changeInputValue(this.name, FakeDataService.firstName());
    });
    await this.withDelay(() => {
      this.changeInputValue(this.surname, FakeDataService.lastName());
    });
    await this.withDelay(() => {
      this.changeInputValue(this.email, FakeDataService.email());
    });
    await this.withDelay(() => {
      this.changeInputValue(this.phone, FakeDataService.phone());
    });
    await this.withDelay(() => {
      if (!this.getInput(this.privacyPolicy).checked)
        this.clickInputElement(this.privacyPolicy);
    });
  }
}
