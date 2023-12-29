import FakeDataService from "../../services/fakeDataService";
import Page from "../page";

export default class ContractorPage extends Page {
  public static path: string = "contraente";

  private birthCity = "input[name='contractor.birthCity']";
  private gender = "input[name='contractor.gender']";
  private fiscalCode = '//input[@name="contractor.fiscalCode"]/..//button';

  private maritalStatus = "input[name='contractor.maritalStatus']";
  private familyUnitType = "input[name='contractor.familyUnitType']";
  private questions = "div[data-testid] button:nth-child(2)";
  private confirmProtection =
    "//*[text()[contains(.,'Confermi di voler proteggere te stesso')]]/../../..//button[1]";

  private isPoliticallExposed =
    "//*[text()='Sei una persona politicamente esposta e/o ricopri incarichi amministrativi pubblici importanti anche se non politici?']/../../..//button[2]";
  private allInfoViaEmail =
    "//*[text()='Confermi di voler ricevere tutte le informazioni via email?']/../../..//button[2]";
  private street = "input[name='street']";
  private streetNumber = "input[name='streetNumber']";
  private postalCode = "input[name='postalCode']";
  private city = "input[name='city']";
  private province = "input[name='province']";
  private state = "input[name='state']";

  autofill(): void {
    this.changeInputValue(this.birthCity, FakeDataService.city());
    this.withDelay(() => {
      this.changeInputValue(this.gender, "MALE");
    });
    this.withDelay(() => {
      this.clickWithXpath(this.fiscalCode);
    });
    this.withDelay(() => {
      this.clickMultiples(this.questions);
    });
    this.withDelay(() => {
      this.clickWithXpath(this.confirmProtection);
    });
    this.withDelay(() => {
      this.changeInputValue(this.maritalStatus, "SINGLE");
    });
    this.withDelay(() => {
      this.changeInputValue(this.familyUnitType, "SINGLE");
    });
    this.withDelay(() => {
      this.clickWithXpath(this.isPoliticallExposed);
    });
    this.withDelay(() => {
      this.clickWithXpath(this.allInfoViaEmail);
    });
    this.withDelay(() => {
      this.changeInputValue(this.street, FakeDataService.street());
    });
    this.withDelay(() => {
      this.changeInputValue(this.streetNumber, "99");
    });
    this.withDelay(() => {
      this.changeInputValue(this.postalCode, "20100");
    });
    this.withDelay(() => {
      this.changeInputValue(this.city, "Milano");
    });
    this.withDelay(() => {
      this.changeInputValue(this.province, "MI");
    });
    this.withDelay(() => {
      this.changeInputValue(this.state, "Italia");
    });
  }
}
