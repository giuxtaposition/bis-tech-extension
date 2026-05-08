import Page from "../page";
import { pagesPath } from "../paths";

export default class BeneficiariesPage extends Page {
  public static path: string = pagesPath.life.beneficiaries;

  private beneficiariesType = "input[name='beneficiaries.beneficiariesType']";
  private capitalToBeneficiaries =
    "input[name='compliance.capitalToBeneficiaries']";
  private insuranceIsNotSavings =
    "input[name='compliance.insuranceIsNotSavings']";
  private legalRepresentativeIsPoliticallyExposed =
    "//div[contains(@data-testid, 'isPoliticallyExposedAndHasAdministrativeResponsibility')]//button[2]";
  private legalRepresentativeIsContactPerson =
    "//div[contains(@data-testid, 'isContactPerson')]//button[1]";

  // used only for isNamedBeneficiaryLegalPersonDialogOpen check
  private businessName = "input[name$=businessName]";

  async autofill(): Promise<void> {
    if (!this.isNamedBeneficiaryLegalPersonDialogOpen()) {
      this.changeInputValue(this.beneficiariesType, "LEGITIMATE_AND_TESTAMENTARY_HEIRS");
      if (!this.getInput(this.capitalToBeneficiaries)?.checked)
        this.clickInputElement(this.capitalToBeneficiaries);
      if (!this.getInput(this.insuranceIsNotSavings)?.checked)
        this.clickInputElement(this.insuranceIsNotSavings);
    }

    if (this.isNamedBeneficiaryLegalPersonDialogOpen()) {
      this.smartAutofill();
      this.clickWithXpath(this.legalRepresentativeIsPoliticallyExposed);
      this.clickWithXpath(this.legalRepresentativeIsContactPerson);
    }
  }

  isNamedBeneficiaryLegalPersonDialogOpen() {
    return !!this.getInput(this.businessName);
  }
}
