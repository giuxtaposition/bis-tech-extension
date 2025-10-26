import FakeDataService from "../../services/fakeDataService";
import Page from "../page";

export default class PersonalDataPage extends Page {
  public static path: string = "dati-personali";

  // Insured
  private insuredName = "input[name$='insured.name']";
  private insuredSurname = "input[name$='insured.surname']";
  private insuredEmail = "input[name$='insured.email']";
  private insuredPhone = "input[name$='insured.phone']";
  private insuredBirthCity = "input[name='insured.cityOfBirth']";
  private insuredGender = "input[name='insured.gender']";
  private insuredJob = "input[name='insured.profession']";
  private insuredOccupationType = "input[name='insured.economicActivityType']";
  private insuredMaritalStatus = "input[name='insured.maritalStatus']";
  private insuredFamilyUnitType = "input[name='insured.familyUnitType']";
  private insuredIsPoliticallExposed =
    "//div[@data-testid='question-insured.isPoliticallyExposedAndHasAdministrativeResponsibility']//button[2]";
  private insuredAllInfoViaEmail =
    "//div[@data-testid='question-insured.allCommunicationsByEmail']//button";
  private insuredStreet = "input[name='insured.residence.address.street']";
  private insuredStreetNumber =
    "input[name='insured.residence.address.streetNumber']";
  private insuredPostalCode =
    "input[name='insured.residence.address.postalCode']";
  private insuredCity = "input[name='insured.residence.city.name']";
  private insuredProvince = "input[name='insured.residence.province.name']";
  private insuredState = "input[name='insured.residence.state.name']";

  // policy holder legal person
  private businessName = "input[name$=businessName]";
  private vatNumber = "input[name$=vatNumber]";
  private atecoCode = "input[name$=atecoCode]";
  private businessPhone = "input[name$=businessPhone]";
  private businessEmail = "input[name$=businessEmail]";
  private registeredOfficeStreet =
    "input[name$='registeredOffice.address.street']";
  private registeredOfficeStreetNumber =
    "input[name$='registeredOffice.address.streetNumber']";
  private registeredOfficePostalCode =
    "input[name$='registeredOffice.address.postalCode']";
  private registeredOfficeCity = "input[name$='registeredOffice.city.name']";
  private registeredOfficeProvince =
    "input[name$='registeredOffice.province.name']";
  private registeredOfficeState = "input[name$='registeredOffice.state.name']";
  private legalRepresentativeName = "input[name$='legalRepresentative.name']";
  private legalRepresentativeSurname =
    "input[name$='legalRepresentative.surname']";
  private legalRepresentativeEmail = "input[name$='legalRepresentative.email']";
  private legalRepresentativePhone = "input[name$='legalRepresentative.phone']";
  private legalRepresentativeBirthDate =
    "input[name$='legalRepresentative.birthDate']";
  private legalRepresentativeCityOfBirth =
    "input[name$='legalRepresentative.cityOfBirth']";
  private legalRepresentativeGender =
    "input[name$='legalRepresentative.gender']";
  private legalRepresentativeRelationship =
    "input[name$='legalRepresentative.relationship']";
  private legalRepresentativeIsPoliticallyExposed =
    "//div[contains(@data-testid, 'legalRepresentative.isPoliticallyExposedAndHasAdministrativeResponsibility')]//button[2]";
  private legalRepresentativeAllCommunicationsByEmail =
    "//div[contains(@data-testid, 'legalRepresentative.allCommunicationsByEmail')]//button[2]";
  private legalRepresentativeResidenceStreet =
    "input[name$='legalRepresentative.residence.address.street']";
  private legalRepresentativeResidenceStreetNumber =
    "input[name$='legalRepresentative.residence.address.streetNumber']";
  private legalRepresentativeResidencePostalCode =
    "input[name$='legalRepresentative.residence.address.postalCode']";
  private legalRepresentativeResidenceCity =
    "input[name$='legalRepresentative.residence.city.name']";
  private legalRepresentativeResidenceProvince =
    "input[name$='legalRepresentative.residence.province.name']";
  private legalRepresentativeResidenceState =
    "input[name$='legalRepresentative.residence.state.name']";

  async autofill(): Promise<void> {
    this.changeInputValue(this.insuredBirthCity, FakeDataService.city());
    this.changeInputValue(this.insuredGender, "MALE");
    this.changeInputValue(this.insuredJob, "LIVESTOCK_BREEDER");
    this.changeInputValue(this.insuredOccupationType, "PRIVATE_SECTOR_PERMANENT_EMPLOYEE")
    this.changeInputValue(this.insuredMaritalStatus, "SINGLE");
    this.changeInputValue(this.insuredFamilyUnitType, "SINGLE");
    this.clickWithXpath(this.insuredIsPoliticallExposed);
    this.clickWithXpath(this.insuredAllInfoViaEmail);
    this.changeInputValue(this.insuredStreet, FakeDataService.street());
    this.changeInputValue(this.insuredStreetNumber, "99");
    this.changeInputValue(this.insuredPostalCode, "20100");
    this.changeInputValue(this.insuredCity, "Milano");
    this.changeInputValue(this.insuredProvince, "MI");
    this.changeInputValue(this.insuredState, "Italia");

    if (this.isPolicyHolderLegalPerson()) {
      this.changeInputValue(this.businessName, "Pinco Pallino SRL");
      this.changeInputValue(this.vatNumber, "34926370544");
      this.changeInputValue(this.atecoCode, "81.21");
      this.changeInputValue(this.businessPhone, FakeDataService.phone());
      this.changeInputValue(this.businessEmail, FakeDataService.email());

      this.changeInputValue(
        this.registeredOfficeStreet,
        FakeDataService.street(),
      );
      this.changeInputValue(this.registeredOfficeStreetNumber, "99");
      this.changeInputValue(this.registeredOfficePostalCode, "20100");
      this.changeInputValue(this.registeredOfficeCity, "Milano");
      this.changeInputValue(this.registeredOfficeProvince, "MI");
      this.changeInputValue(this.registeredOfficeState, "Italia");

      this.changeInputValue(
        this.legalRepresentativeName,
        FakeDataService.firstName(),
      );
      this.changeInputValue(
        this.legalRepresentativeSurname,
        FakeDataService.lastName(),
      );
      this.changeInputValue(
        this.legalRepresentativePhone,
        FakeDataService.phone(),
      );
      this.changeInputValue(
        this.legalRepresentativeEmail,
        FakeDataService.email(),
      );
      this.changeInputValue(
        this.legalRepresentativeBirthDate,
        FakeDataService.birthdate(74),
      );
      this.changeInputValue(
        this.legalRepresentativeCityOfBirth,
        FakeDataService.city(),
      );
      this.changeInputValue(this.legalRepresentativeGender, "MALE");
      this.changeInputValue(this.legalRepresentativeRelationship, "EMPLOYER");
      this.clickWithXpath(this.legalRepresentativeIsPoliticallyExposed);
      this.clickWithXpath(this.legalRepresentativeAllCommunicationsByEmail);
      this.changeInputValue(
        this.legalRepresentativeResidenceStreet,
        FakeDataService.street(),
      );
      this.changeInputValue(
        this.legalRepresentativeResidenceStreetNumber,
        "99",
      );
      this.changeInputValue(
        this.legalRepresentativeResidencePostalCode,
        "20100",
      );
      this.changeInputValue(this.legalRepresentativeResidenceCity, "Milano");
      this.changeInputValue(this.legalRepresentativeResidenceProvince, "MI");
      this.changeInputValue(this.legalRepresentativeResidenceState, "Italia");

      await this.withDelay(() => {
        this.changeInputValue(this.insuredName, FakeDataService.firstName());
      });
      await this.withDelay(() => {
        this.changeInputValue(this.insuredSurname, FakeDataService.lastName());
      });
      await this.withDelay(() => {
        this.changeInputValue(this.insuredEmail, FakeDataService.email());
      });
      await this.withDelay(() => {
        this.changeInputValue(this.insuredPhone, FakeDataService.phone());
      });
    }
  }

  isPolicyHolderLegalPerson() {
    return !!this.getInput(this.businessName);
  }
}
