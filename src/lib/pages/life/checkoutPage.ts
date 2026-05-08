import Page from "../page";
import { pagesPath } from "../paths";

export default class CheckoutPage extends Page {
  public static path: string = pagesPath.life.checkout;

  private medicalExams =
    "//div[@data-testid='question-wantsToDoMedicalExam']//button[2]";
  private isAccountHolder =
    "//div[@data-testid='question-payment.isAccountHolder']//button";
  private dataTruthfulness =
    "//div[@data-testid='question-compliance.dataTruthfulness']//button";
  private termsAndConditions =
    "//div[@data-testid='question-compliance.termsAndConditions']//button";
  private understandLimitationsAndExclusions =
    "//div[@data-testid='question-compliance.understandLimitationsAndExclusions']//button";
  private privacyPolicyExtended =
    "//div[@data-testid='question-privacyPolicyExtended']//button";
  private otherPolicies =
    "//div[@data-testid='question-compliance.otherPolicies']//button";
  private confirmObligations =
    "//div[@data-testid='question-compliance.confirmObligations']//button";

  async autofill(): Promise<void> {
    this.smartAutofill();
    this.clickWithXpath(this.medicalExams);
    this.clickWithXpath(this.isAccountHolder);
    this.clickWithXpath(this.dataTruthfulness);
    this.clickWithXpath(this.termsAndConditions);
    this.clickWithXpath(this.understandLimitationsAndExclusions);
    this.clickWithXpath(this.privacyPolicyExtended);
    this.clickWithXpath(this.otherPolicies);
    this.clickWithXpath(this.confirmObligations);
  }

}
