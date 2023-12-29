import FakeDataService from "../../services/fakeDataService";
import Page from "../page";

export default class PersonalDataPage extends Page {
  public static path: string = "dati-personali";

  private birthCity = "input[name='cityOfBirth']";
  private gender = "input[name='gender']";
  private fiscalCode = '//input[@name="fiscalCode"]/..//button';

  private job = "input[name='profession']";
  private maritalStatus = "input[name='maritalStatus']";
  private familyUnitType = "input[name='familyUnitType']";
  private isPoliticallExposed =
    "//div[@data-testid='question-isPoliticallyExposedAndHasAdministrativeResponsibility']//button[2]";
  private allInfoViaEmail =
    "//div[@data-testid='question-allCommunicationsByEmail']//button";
  private street = "input[name='residence.address.street']";
  private streetNumber = "input[name='residence.address.streetNumber']";
  private postalCode = "input[name='residence.address.postalCode']";
  private city = "input[name='residence.city.name']";
  private province = "input[name='residence.province.name']";
  private state = "input[name='residence.state.name']";

  async autofill(): Promise<void> {
    this.changeInputValue(this.birthCity, FakeDataService.city());
    this.changeInputValue(this.gender, "MALE");
    this.clickWithXpath(this.fiscalCode);
    this.changeInputValue(this.job, "LIVESTOCK_BREEDER");
    this.changeInputValue(this.maritalStatus, "Single");
    this.changeInputValue(this.familyUnitType, "Single");
    this.clickWithXpath(this.isPoliticallExposed);
    this.clickWithXpath(this.allInfoViaEmail);
    this.changeInputValue(this.street, FakeDataService.street());
    this.changeInputValue(this.streetNumber, "99");
    this.changeInputValue(this.postalCode, "20100");
    this.changeInputValue(this.city, "Milano");
    this.changeInputValue(this.province, "MI");
    this.changeInputValue(this.state, "Italia");
  }
}
