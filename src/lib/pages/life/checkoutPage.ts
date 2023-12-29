import FakeDataService from "../../services/fakeDataService";
import Page from "../page";

export default class CheckoutPage extends Page {
  public static path: string = "checkout";

  private documentType = "input[name='insured.document.type']";
  private documentCode = "input[name='insured.document.code']";
  private documentReleaseDate = "input[name='insured.document.releaseDate']";
  private documentExpirationDate = "input[name='insured.document.expireDate']";
  private documentReleasePlace = "input[name='insured.document.releasePlace']";
  private documentReleaseAuthority =
    "input[name='insured.document.releaseAuthority']";
  private medicalExams =
    "//div[@data-testid='wantsToDoMedicalExam']//button[2]";

  private dataTruthfulness = "//div[@data-testid='dataTruthfulness']//button";

  private termsAndConditions =
    "//div[@data-testid='termsAndConditions']//button";
  private privacyPolicyExtended =
    "//div[@data-testid='privacyPolicyExtended']//button";
  private otherPolicies = "//div[@data-testid='otherPolicies']//button";
  private confirmObligations =
    "//div[@data-testid='confirmObligations']//button";

  async autofill(): Promise<void> {
    this.changeInputValue(this.documentType, "passport");
    this.changeInputValue(this.documentCode, "ASD123");
    this.changeInputValue(this.documentReleaseDate, "01/01/2020");
    this.changeInputValue(this.documentExpirationDate, "01/01/2030");
    this.changeInputValue(this.documentReleasePlace, FakeDataService.city());
    this.changeInputValue(this.documentReleaseAuthority, "prefecture");
    this.clickWithXpath(this.medicalExams);
    this.clickWithXpath(this.dataTruthfulness);
    this.clickWithXpath(this.termsAndConditions);
    this.clickWithXpath(this.privacyPolicyExtended);
    this.clickWithXpath(this.otherPolicies);
    this.clickWithXpath(this.confirmObligations);
  }
}
