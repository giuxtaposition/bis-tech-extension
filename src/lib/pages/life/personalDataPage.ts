import Page from "../page";
import { pagesPath } from "../paths";

export default class PersonalDataPage extends Page {
  public static path: string = pagesPath.life.personalData;

  private insuredJob = "input[name='insured.profession']";
  private insuredOccupationType = "input[name='insured.economicActivityType']";
  private insuredIsPoliticallExposed =
    "//div[@data-testid='question-insured.isPoliticallyExposedAndHasAdministrativeResponsibility']//button[2]";
  private insuredAllInfoViaEmail =
    "//div[@data-testid='question-insured.allCommunicationsByEmail']//button";
  private legalRepresentativeIsPoliticallyExposed =
    "//div[contains(@data-testid, 'legalRepresentative.isPoliticallyExposedAndHasAdministrativeResponsibility')]//button[2]";
  private legalRepresentativeAllCommunicationsByEmail =
    "//div[contains(@data-testid, 'legalRepresentative.allCommunicationsByEmail')]//button[2]";

  // used only for isPolicyHolderLegalPerson check
  private businessName = "input[name$=businessName]";

  async autofill(): Promise<void> {
    this.smartAutofill();
    this.changeInputValue(this.insuredJob, "LIVESTOCK_BREEDER");
    this.changeInputValue(this.insuredOccupationType, "PRIVATE_SECTOR_PERMANENT_EMPLOYEE");
    this.clickWithXpath(this.insuredIsPoliticallExposed);
    this.clickWithXpath(this.insuredAllInfoViaEmail);

    if (this.isPolicyHolderLegalPerson()) {
      this.clickWithXpath(this.legalRepresentativeIsPoliticallyExposed);
      this.clickWithXpath(this.legalRepresentativeAllCommunicationsByEmail);
    }
  }

  isPolicyHolderLegalPerson() {
    return !!this.getInput(this.businessName);
  }
}
