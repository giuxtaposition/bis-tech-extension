import FakeDataService from "../../services/fakeDataService";
import Page from "../page";

export default class PersonalDataPage extends Page {
  public static path: string = "dati-personali";

  private birthCity = "input[name='insured.cityOfBirth']";
  private gender = "input[name='insured.gender']";
  private fiscalCode = '//input[@name="insured.fiscalCode"]/..//button';

  private job = "input[name='insured.profession']";
  private maritalStatus = "input[name='insured.maritalStatus']";
  private familyUnitType = "input[name='insured.familyUnitType']";
  private isPoliticallExposed =
    "//div[@data-testid='question-insured.isPoliticallyExposedAndHasAdministrativeResponsibility']//button[2]";
  private allInfoViaEmail =
    "//div[@data-testid='question-insured.allCommunicationsByEmail']//button";
  private street = "input[name='insured.residence.address.street']";
  private streetNumber = "input[name='insured.residence.address.streetNumber']";
  private postalCode = "input[name='insured.residence.address.postalCode']";
  private city = "input[name='insured.residence.city.name']";
  private province = "input[name='insured.residence.province.name']";
  private state = "input[name='insured.residence.state.name']";

  async autofill(): Promise<void> {
    this.changeInputValue(this.birthCity, FakeDataService.city());
    this.changeInputValue(this.gender, "MALE");
    this.clickWithXpath(this.fiscalCode);
    this.changeInputValue(this.job, "LIVESTOCK_BREEDER");
    this.changeInputValue(this.maritalStatus, "SINGLE");
    this.changeInputValue(this.familyUnitType, "SINGLE");
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
