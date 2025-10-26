import FakeDataService from "../../services/fakeDataService";
import Page from "../page";

export default class CheckoutPage extends Page {
  public static path: string = "checkout";

  private insuredDocumentType = "input[name='insured.document.type']";
  private insuredDocumentCode = "input[name='insured.document.code']";
  private insuredDocumentReleaseDate =
    "input[name='insured.document.releaseDate']";
  private insuredDocumentExpirationDate =
    "input[name='insured.document.expireDate']";
  private insuredDocumentReleasePlace =
    "input[name='insured.document.releasePlace']";
  private insuredDocumentReleaseAuthority =
    "input[name='insured.document.releaseAuthority']";

  //policy holder legal person
  private policyHolderLegalPersonDocumentType =
    "input[name='policyHolder.legalRepresentative.document.type']";
  private policyHolderLegalPersonDocumentCode =
    "input[name='policyHolder.legalRepresentative.document.code']";
  private policyHolderLegalPersonDocumentReleaseDate =
    "input[name='policyHolder.legalRepresentative.document.releaseDate']";
  private policyHolderLegalPersonDocumentExpirationDate =
    "input[name='policyHolder.legalRepresentative.document.expireDate']";
  private policyHolderLegalPersonDocumentReleasePlace =
    "input[name='policyHolder.legalRepresentative.document.releasePlace']";
  private policyHolderLegalPersonDocumentReleaseAuthority =
    "input[name='policyHolder.legalRepresentative.document.releaseAuthority']";

  private medicalExams =
    "//div[@data-testid='question-wantsToDoMedicalExam']//button[2]";

  private iban = "input[name='payment.iban']";
  private sourceOfFounds = "input[name='payment.sourceOfFunds']";

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
    this.changeInputValue(this.insuredDocumentType, "PASSPORT");
    this.changeInputValue(this.insuredDocumentCode, "ASD123");
    this.changeInputValue(this.insuredDocumentReleaseDate, "01/01/2020");
    this.changeInputValue(this.insuredDocumentExpirationDate, "01/01/2030");
    this.changeInputValue(
      this.insuredDocumentReleasePlace,
      FakeDataService.city(),
    );
    this.changeInputValue(this.insuredDocumentReleaseAuthority, "PREFECTURE");
    this.clickWithXpath(this.medicalExams);
    this.changeInputValue(this.iban, "IT87D0300203280616976634975");
    this.changeInputValue(this.sourceOfFounds, "EMPLOYMENT_INCOME")
    this.clickWithXpath(this.isAccountHolder);
    this.clickWithXpath(this.dataTruthfulness);
    this.clickWithXpath(this.termsAndConditions);
    this.clickWithXpath(this.privacyPolicyExtended);
    this.clickWithXpath(this.otherPolicies);
    this.clickWithXpath(this.confirmObligations);

    if (this.isPolicyHolderLegalPerson()) {
      this.changeInputValue(
        this.policyHolderLegalPersonDocumentType,
        "PASSPORT",
      );
      this.changeInputValue(this.policyHolderLegalPersonDocumentCode, "ASD123");
      this.changeInputValue(
        this.policyHolderLegalPersonDocumentReleaseDate,
        "01/01/2020",
      );
      this.changeInputValue(
        this.policyHolderLegalPersonDocumentExpirationDate,
        "01/01/2030",
      );
      this.changeInputValue(
        this.policyHolderLegalPersonDocumentReleasePlace,
        FakeDataService.city(),
      );
      this.changeInputValue(
        this.policyHolderLegalPersonDocumentReleaseAuthority,
        "PREFECTURE",
      );
    }
  }

  isPolicyHolderLegalPerson() {
    return !!this.getInput(this.policyHolderLegalPersonDocumentCode);
  }
}
