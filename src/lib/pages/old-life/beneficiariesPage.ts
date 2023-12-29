import Page from "../page";

export default class BeneficieariesPage extends Page {
  public static path: string = "beneficiari";

  private beneficiariesType = "input[name='beneficiaries.type']";
  private capitalToBeneficiaries =
    "input[name='agreements.beneficiariesPurpose']";
  private insuranceIsNotSavings = "input[name='agreements.policyPurpose']";

  async autofill(): Promise<void> {
    this.changeInputValue(
      this.beneficiariesType,
      "LEGITIMATE_AND_TESTAMENTARY_HEIRS",
    );
    await this.withDelay(() => {
      this.clickInputElement(this.capitalToBeneficiaries);
    });
    await this.withDelay(() => {
      this.clickInputElement(this.insuranceIsNotSavings);
    });
  }
}
