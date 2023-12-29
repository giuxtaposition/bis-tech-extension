import Page from "../page";

export default class BeneficieariesPage extends Page {
  public static path: string = "beneficiari";

  private beneficiariesType = "input[name='beneficiaries.type']";
  private capitalToBeneficiaries =
    "input[name='agreements.beneficiariesPurpose']";
  private insuranceIsNotSavings = "input[name='agreements.policyPurpose']";

  autofill(): void {
    this.changeInputValue(
      this.beneficiariesType,
      "LEGITIMATE_AND_TESTAMENTARY_HEIRS",
    );
    this.clickInputElement(this.capitalToBeneficiaries);
    this.clickInputElement(this.insuranceIsNotSavings);
  }
}
