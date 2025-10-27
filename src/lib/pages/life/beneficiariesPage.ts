import FakeDataService from "../../services/fakeDataService";
import Page from "../page";
import { pagesPath } from "../paths";

export default class BeneficiariesPage extends Page {
  public static path: string = pagesPath.life.beneficiaries;

  private beneficiariesType = "input[name='beneficiaries.beneficiariesType']";
  private capitalToBeneficiaries =
    "input[name='compliance.capitalToBeneficiaries']";
  private insuranceIsNotSavings =
    "input[name='compliance.insuranceIsNotSavings']";

  // Legal person
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
    "//div[contains(@data-testid, 'isPoliticallyExposedAndHasAdministrativeResponsibility')]//button[2]";
  private legalRepresentativeIsContactPerson =
    "//div[contains(@data-testid, 'isContactPerson')]//button[1]";
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
    if (!this.isNamedBeneficiaryLegalPersonDialogOpen()) {
      this.changeInputValue(
        this.beneficiariesType,
        "LEGITIMATE_AND_TESTAMENTARY_HEIRS",
      );
        if (!this.getInput(this.capitalToBeneficiaries).checked)
      this.clickInputElement(this.capitalToBeneficiaries);
      if (!this.getInput(this.insuranceIsNotSavings).checked)
        this.clickInputElement(this.insuranceIsNotSavings);
    }

    if (this.isNamedBeneficiaryLegalPersonDialogOpen()) {
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
      this.clickWithXpath(this.legalRepresentativeIsContactPerson);
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
    }
  }

  isNamedBeneficiaryLegalPersonDialogOpen() {
    return !!this.getInput(this.businessName);
  }
}
