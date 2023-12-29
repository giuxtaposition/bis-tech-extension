import Page from "../page";

export default class BeneficiariesPage extends Page {
  public static path: string = "beneficiari";

  private beneficiariesType = "input[name='beneficiaries.beneficiariesType']";
  private capitalToBeneficiaries =
    "input[name='compliance.capitalToBeneficiaries']";
  private insuranceIsNotSavings =
    "input[name='compliance.insuranceIsNotSavings']";

  async autofill(): Promise<void> {
    this.changeInputValue(
      this.beneficiariesType,
      "legitimateAndTestamentaryHeirs",
    );
    this.clickInputElement(this.capitalToBeneficiaries);
    this.clickInputElement(this.insuranceIsNotSavings);
  }
}
