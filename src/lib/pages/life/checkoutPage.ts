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
    "//div[@data-testid='question-wantsToDoMedicalExam']//button[2]";

  private iban = "input[name='payment.iban']";

  private isAccountHolder =
    "//div[@data-testid='question-payment.isAccountHolder']//button";
  private dataTruthfulness =
    "//div[@data-testid='question-compliance.dataTruthfulness']//button";
  private termsAndConditions =
    "//div[@data-testid='question-compliance.termsAndConditions']//button";
  private privacyPolicyExtended =
    "//div[@data-testid='question-privacyPolicyExtended']//button";
  private otherPolicies =
    "//div[@data-testid='question-compliance.otherPolicies']//button";
  private confirmObligations =
    "//div[@data-testid='question-compliance.confirmObligations']//button";

  async autofill(): Promise<void> {
    this.changeInputValue(this.documentType, "PASSPORT");
    this.changeInputValue(this.documentCode, "ASD123");
    this.changeInputValue(this.documentReleaseDate, "01/01/2020");
    this.changeInputValue(this.documentExpirationDate, "01/01/2030");
    this.changeInputValue(this.documentReleasePlace, FakeDataService.city());
    this.changeInputValue(this.documentReleaseAuthority, "PREFECTURE");
    this.clickWithXpath(this.medicalExams);
    this.changeInputValue(this.iban, "IT87D0300203280616976634975");
    this.clickWithXpath(this.isAccountHolder);
    this.clickWithXpath(this.dataTruthfulness);
    this.clickWithXpath(this.termsAndConditions);
    this.clickWithXpath(this.privacyPolicyExtended);
    this.clickWithXpath(this.otherPolicies);
    this.clickWithXpath(this.confirmObligations);
  }
}
