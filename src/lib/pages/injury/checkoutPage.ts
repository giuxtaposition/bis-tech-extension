import FakeDataService from "../../services/fakeDataService";
import Page from "../page";

export default class CheckoutPage extends Page {
  public static path: string = "checkout";

  private documentType = "input[name='contractor.document.type']";
  private documentCode = "input[name='contractor.document.code']";
  private documentReleaseDate = "input[name='contractor.document.releaseDate']";
  private documentExpirationDate =
    "input[name='contractor.document.expireDate']";
  private documentReleasePlace =
    "input[name='contractor.document.releasePlace']";
  private documentReleaseAuthority =
    "input[name='contractor.document.releaseAuthority']";

  private dataTruthfulness =
    "div[data-testid='agreements.dataTruthfulness'] button";
  private termsAndConditions =
    "div[data-testid='agreements.termsAndConditions'] button";
  private limitationsAndExclusion =
    "div[data-testid='agreements.limitationsAndExclusion'] button";
  private privacyPolicyExtended =
    "div[data-testid='agreements.privacyPolicyExtended'] button";
  private oneYearPolicy = "div[data-testid='agreements.oneYearPolicy'] button";

  async autofill(): Promise<void> {
    this.changeInputValue(this.documentType, "PASSPORT");
    await this.withDelay(() => {
      this.changeInputValue(this.documentCode, "ASD123");
    });
    await this.withDelay(() => {
      this.changeInputValue(this.documentReleaseDate, "01/01/2020");
    });
    await this.withDelay(() => {
      this.changeInputValue(this.documentExpirationDate, "01/01/2030");
    });
    await this.withDelay(() => {
      this.changeInputValue(this.documentReleasePlace, FakeDataService.city());
    });
    await this.withDelay(() => {
      this.changeInputValue(this.documentReleaseAuthority, "PREFECTURE");
    });
    await this.withDelay(() => {
      this.clickInputElement(this.dataTruthfulness);
    });
    await this.withDelay(() => {
      this.clickInputElement(this.termsAndConditions);
    });
    await this.withDelay(() => {
      this.clickInputElement(this.limitationsAndExclusion);
    });
    await this.withDelay(() => {
      this.clickInputElement(this.privacyPolicyExtended);
    });
    await this.withDelay(() => {
      this.clickInputElement(this.oneYearPolicy);
    });
  }
}
