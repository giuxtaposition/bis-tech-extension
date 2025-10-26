import FakeDataService from "../../services/fakeDataService";
import Page from "../page";
import { pagesPath } from "../paths";

export default class PreventivatorePage extends Page {
  public static path: string = pagesPath.life.preventivatore;

  private duration =
    "[data-testid='duration-slider'] [data-testid='slider.bar'] [data-index='2'][aria-hidden=true]";
  private capital =
    "[data-testid='capital-slider'] [data-testid='slider.bar'] [data-index='2'][aria-hidden=true]";
  private birthDate = "input[name='birthDate']";
  private smoker = "input[name='smoker'][value='N']";
  private privacyPolicy = "input[name='privacyPolicyAccepted']";

  async autofill(): Promise<void> {
    this.changeInputValue(this.birthDate, FakeDataService.birthdate(74));
    this.clickInputElement(this.smoker);
    this.clickInputElement(this.privacyPolicy);
    this.clickInputElement(this.duration);
    this.clickInputElement(this.capital);
  }
}
