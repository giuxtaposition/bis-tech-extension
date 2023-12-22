import { fakerIT as faker } from "@faker-js/faker";

import { Product } from "../../types";

export enum EventType {
  Change = "change",
  Click = "click",
  ClickMultiples = "clickMultiples",
  ClickWithXpath = "clickWithXpath",
  ClickNthChild = "ClickNthChild",
}

export enum LifePage {
  Calculator = "preventivatore",
  YourOffer = "la-tua-offerta",
  HealthStatus = "stato-di-salute",
  Beneficiaries = "beneficiari",
  PersonalData = "dati-personali",
  Checkout = "checkout",
}

enum InjuryPage {
  Select = "seleziona",
  YourOffer = "la-tua-polizza-infortuni",
  Contractor = "contraente",
  PersonalData = "dati-personali",
  Checkout = "checkout",
}

type AutoFillData = {
  [key: string]: {
    value?: string;
    child?: number;
    withDelay?: boolean;
    event: EventType;
    selector: string;
  };
};

class AutoFillDataService {
  static autofillData = {
    [Product.SquareLife]: {
      [LifePage.Calculator]: () => ({
        birthdate: {
          value: this.fakeBirthdate(),
          event: EventType.Change,
          selector: "input[name='customerInfo.birthDate']",
        },
        smoker: {
          event: EventType.Click,
          selector: "input[name='data.smoker'][value='N']",
        },
        privacyPolicy: {
          event: EventType.Click,
          selector: "input[name='agreements.privacyPolicy']",
        },
      }),
      [LifePage.YourOffer]: () => ({
        name: {
          value: this.fakeName(),
          event: EventType.Change,
          selector: "input[name='customerInfo.firstName']",
        },
        surname: {
          value: this.fakeSurname(),
          event: EventType.Change,
          selector: "input[name='customerInfo.lastName']",
        },
        email: {
          value: this.fakeEmail(),
          event: EventType.Change,
          selector: "input[name='customerInfo.email']",
        },
        phone: {
          value: this.fakePhone(),
          event: EventType.Change,
          selector: "input[name='customerInfo.phoneNumber']",
        },
        privacyPolicy: {
          event: EventType.Click,
          selector: "input[name='agreements.privacyPolicyBroker']",
        },
      }),
      [LifePage.HealthStatus]: () => ({
        privacyPolicy: {
          event: EventType.ClickWithXpath,
          selector:
            '//*[text()[contains(.,"Ai sensi della vigente normativa sulla Privacy,")]]/../../..//button[1]',
        },
        questions: {
          event: EventType.ClickMultiples,
          selector: "div[data-testid] button:nth-child(2)",
        },
      }),
      [LifePage.Beneficiaries]: () => ({
        beneficiariesType: {
          value: "LEGITIMATE_AND_TESTAMENTARY_HEIRS",
          event: EventType.Change,
          selector: "input[name='beneficiaries.type']",
        },
        capitalToBeneficiaries: {
          event: EventType.Click,
          selector: "input[name='agreements.beneficiariesPurpose']",
        },
        insuranceIsNotSavings: {
          event: EventType.Click,
          selector: "input[name='agreements.policyPurpose']",
        },
      }),
      [LifePage.PersonalData]: () => ({
        gender: {
          value: "MALE",
          event: EventType.Change,
          selector: 'input[name="customerInfo.gender"]',
        },
        birthCity: {
          value: this.fakeCity(),
          event: EventType.Change,
          selector: "input[name='customerInfo.birthCity']",
          withDelay: true,
        },
        fiscalCode: {
          event: EventType.ClickWithXpath,
          withDelay: true,
          selector: '//input[@name="customerInfo.fiscalCode"]/..//button',
        },
        job: {
          value: "HOTELIER",
          event: EventType.Change,
          selector: "input[name='customerInfo.job']",
          withDelay: true,
        },
        maritalStatus: {
          value: "SINGLE",
          event: EventType.Change,
          selector: "input[name='customerInfo.maritalStatus']",
          withDelay: true,
        },
        familyUnitType: {
          value: "SINGLE",
          event: EventType.Change,
          selector: "input[name='customerInfo.familyUnitType']",
          withDelay: true,
        },
        isPoliticallExposed: {
          event: EventType.ClickWithXpath,
          selector:
            "//*[text()='Sei una persona politicamente esposta e/o ricopri incarichi amministrativi pubblici importanti anche se non politici?']/../../..//button[2]",
          withDelay: true,
        },
        allInfoViaEmail: {
          event: EventType.ClickWithXpath,
          selector:
            "//*[text()='Confermi di voler ricevere tutte le informazioni via email?']/../../..//button[2]",
          withDelay: true,
        },
        street: {
          value: this.fakeStreet(),
          event: EventType.Change,
          selector: "input[name='street']",
          withDelay: true,
        },
        streetNumber: {
          value: "89",
          event: EventType.Change,
          selector: "input[name='streetNumber']",
          withDelay: true,
        },
        postalCode: {
          value: "47923",
          event: EventType.Change,
          selector: "input[name='postalCode']",
          withDelay: true,
        },
        city: {
          value: "Rimini",
          event: EventType.Change,
          selector: "input[name='city']",
          withDelay: true,
        },
        province: {
          value: "RN",
          event: EventType.Change,
          selector: "input[name='province']",
          withDelay: true,
        },
        state: {
          value: "Italia",
          event: EventType.Change,
          selector: "input[name='state']",
          withDelay: true,
        },
      }),
      [LifePage.Checkout]: () => ({
        documentType: {
          value: "PASSPORT",
          event: EventType.Change,
          selector: "input[name='customerInfo.document.type']",
        },
        documentCode: {
          value: "ASD123",
          event: EventType.Change,
          selector: "input[name='customerInfo.document.code']",
          withDelay: true,
        },
        documentReleaseDate: {
          value: "30/03/2015",
          event: EventType.Change,
          selector: "input[name='customerInfo.document.releaseDate']",
          withDelay: true,
        },
        documentExpirationDate: {
          value: "30/03/2035",
          event: EventType.Change,
          selector: "input[name='customerInfo.document.expireDate']",
          withDelay: true,
        },
        documentReleasePlace: {
          value: "Roma",
          event: EventType.Change,
          selector: "input[name='customerInfo.document.releasePlace']",
          withDelay: true,
        },
        documentReleaseAuthority: {
          value: "PREFECTURE",
          event: EventType.Change,
          selector: "input[name='customerInfo.document.releaseAuthority']",
          withDelay: true,
        },
        medicalExams: {
          event: EventType.ClickWithXpath,
          selector:
            '//*[text()[contains(.,"Rispondendo solo alle domande")]]/../../..//button[2]',
          withDelay: true,
        },
        iban: {
          value: "IT80U0300203280965832926428",
          event: EventType.Change,
          selector: "input[name='payment.ibanCode']",
          withDelay: true,
        },
        ibanOwner: {
          event: EventType.ClickWithXpath,
          selector:
            '//*[text()="Confermi di essere l\'intestatario del conto?"]/../../..//button[1]',
          withDelay: true,
        },
        dataThruthfulness: {
          event: EventType.ClickWithXpath,
          selector:
            '//*[text()="Acquistando la polizza dichiaro che tutte le informazioni inserite sono vere ed esatte e mi impegno a comunicare ogni variazione od integrazione delle stesse nel rispetto di quanto previsto dalla Legge sulle dichiarazioni rese in fase contrattuale."]/../../..//button[1]',
          withDelay: true,
        },
        termsAndConditions: {
          event: EventType.ClickWithXpath,
          withDelay: true,
          selector:
            '//*[text()[contains(.,"Dichiaro di aver")]]/../../..//button[1]',
        },
        privacyPolicyExtended: {
          event: EventType.ClickWithXpath,
          selector:
            '//*[text()[contains(.,"Autorizzo il trattamento dei miei dati personali per l\'invio di comunicazioni")]]/../../..//button[1]',
          withDelay: true,
        },
        otherPolicies: {
          event: EventType.ClickWithXpath,
          selector:
            '//*[text()[contains(.,"Possiedi altre polizze come quelle che ci hai chiesto?")]]/../../..//button[1]',
          withDelay: true,
        },
        confirmObligations: {
          event: EventType.ClickWithXpath,
          selector:
            '//*[text()[contains(.,"Confermi che la Polizza deve soddisfare obblighi contrattuali (es. richiesto dalla banca)")]]/../../..//button[1]',
          withDelay: true,
        },
      }),
    },
    [Product.NetLife]: {
      [LifePage.Calculator]: () => ({
        birthdate: {
          value: this.fakeBirthdate(74),
          event: EventType.Change,
          selector: "input[name='birthDate']",
        },
        smoker: {
          event: EventType.Click,
          selector: "input[name='smoker'][value='N']",
        },
        privacyPolicy: {
          event: EventType.Click,
          selector: "input[name='privacyPolicyAccepted']",
        },
      }),
      [LifePage.YourOffer]: () => ({
        name: {
          value: this.fakeName(),
          event: EventType.Change,
          selector: "input[name='contacts.name']",
        },
        surname: {
          value: this.fakeSurname(),
          event: EventType.Change,
          selector: "input[name='contacts.surname']",
        },
        email: {
          value: this.fakeEmail(),
          event: EventType.Change,
          selector: "input[name='contacts.email']",
        },
        phone: {
          value: this.fakePhone(),
          event: EventType.Change,
          selector: "input[name='contacts.phone']",
        },
        privacyPolicy: {
          event: EventType.Click,
          selector: "input[name='contacts.privacyPolicyAccepted']",
        },
      }),
      [LifePage.HealthStatus]: () => ({
        height: {
          event: EventType.Change,
          value: "170",
          selector: 'input[name="height"]',
        },
        weight: {
          event: EventType.Change,
          value: "80",
          selector: 'input[name="weight"]',
        },
        privacyPolicy: {
          event: EventType.Click,
          selector: 'input[name="privacyPolicyAccepted"]',
        },
        questions: {
          event: EventType.ClickMultiples,
          selector: "div[data-testid] button:nth-child(2)",
        },
      }),
      [LifePage.Beneficiaries]: () => ({
        beneficiariesType: {
          value: "legitimateAndTestamentaryHeirs",
          event: EventType.Change,
          selector: "input[name='beneficiaries.beneficiariesType']",
        },
        capitalToBeneficiaries: {
          event: EventType.Click,
          selector: "input[name='compliance.capitalToBeneficiaries']",
        },
        insuranceIsNotSavings: {
          event: EventType.Click,
          selector: "input[name='compliance.insuranceIsNotSavings']",
        },
      }),
      [LifePage.PersonalData]: () => ({
        birthCity: {
          value: this.fakeCity(),
          event: EventType.Change,
          selector: "input[name='cityOfBirth']",
        },
        gender: {
          value: "MALE",
          event: EventType.Change,
          selector: "input[name='gender']",
        },
        fiscalCode: {
          event: EventType.ClickWithXpath,
          selector: '//input[@name="fiscalCode"]/..//button',
        },
        job: {
          value: "LIVESTOCK_BREEDER",
          event: EventType.Change,
          selector: "input[name='profession']",
        },
        maritalStatus: {
          value: "Single",
          event: EventType.Change,
          selector: "input[name='maritalStatus']",
        },
        familyUnitType: {
          value: "Single",
          event: EventType.Change,
          selector: "input[name='familyUnitType']",
        },
        isPoliticallExposed: {
          event: EventType.ClickWithXpath,
          selector:
            '//*[text()[contains(.,"persona politicamente esposta")]]/../../..//button[2]',
        },
        allInfoViaEmail: {
          event: EventType.ClickWithXpath,
          selector:
            '//*[text()[contains(.,"tutte le informazioni via email")]]/../../..//button[2]',
        },
        street: {
          value: this.fakeStreet(),
          event: EventType.Change,
          selector: "input[name='residence.address.street']",
        },
        streetNumber: {
          value: "89",
          event: EventType.Change,
          selector: "input[name='residence.address.streetNumber']",
        },
        postalCode: {
          value: "47923",
          event: EventType.Change,
          selector: "input[name='residence.address.postalCode']",
        },
        city: {
          value: "Rimini",
          event: EventType.Change,
          selector: "input[name='residence.city.name']",
        },
        province: {
          value: "RN",
          event: EventType.Change,
          selector: "input[name='residence.province.name']",
        },
        state: {
          value: "Italia",
          event: EventType.Change,
          selector: "input[name='residence.state.name']",
        },
      }),
      [LifePage.Checkout]: () => ({
        documentType: {
          value: "passport",
          event: EventType.Change,
          selector: "input[name='insured.document.type']",
        },
        documentCode: {
          value: "ASD123",
          event: EventType.Change,
          selector: "input[name='insured.document.code']",
        },
        documentReleaseDate: {
          value: "30/03/2015",
          event: EventType.Change,
          selector: "input[name='insured.document.releaseDate']",
        },
        documentExpirationDate: {
          value: "30/03/2035",
          event: EventType.Change,
          selector: "input[name='insured.document.expireDate']",
        },
        documentReleasePlace: {
          value: "Roma",
          event: EventType.Change,
          selector: "input[name='insured.document.releasePlace']",
        },
        documentReleaseAuthority: {
          value: "prefecture",
          event: EventType.Change,
          selector: "input[name='insured.document.releaseAuthority']",
        },
        medicalExams: {
          event: EventType.ClickWithXpath,
          selector:
            '//*[text()[contains(.,"Rispondendo solo alle domande")]]/../../..//button[2]',
        },
        dataTruthfulness: {
          event: EventType.ClickWithXpath,
          selector:
            '//*[text()="Acquistando la polizza dichiaro che tutte le informazioni inserite sono vere ed esatte e mi impegno a comunicare ogni variazione od integrazione delle stesse nel rispetto di quanto previsto dalla Legge sulle dichiarazioni rese in fase contrattuale."]/../../..//button[1]',
        },
        termsAndConditions: {
          event: EventType.ClickWithXpath,
          selector:
            '//*[text()[contains(.,"Dichiaro di aver")]]/../../..//button[1]',
        },
        privacyPolicyExtended: {
          event: EventType.ClickWithXpath,
          selector:
            '//*[text()[contains(.,"Autorizzo il trattamento dei miei dati personali per l\'invio di comunicazioni")]]/../../..//button[1]',
        },
        otherPolicies: {
          event: EventType.ClickWithXpath,
          selector:
            '//*[text()[contains(.,"Possiedi altre polizze come quelle che ci hai chiesto?")]]/../../..//button[1]',
        },
        confirmObligations: {
          event: EventType.ClickWithXpath,
          selector:
            '//*[text()[contains(.,"Confermi che la Polizza deve soddisfare obblighi contrattuali (es. richiesto dalla banca)")]]/../../..//button[1]',
        },
      }),
    },
    [Product.Injury]: {
      [InjuryPage.Select]: () => ({
        protectMe: {
          selector: "div[data-testid='injury-select-me']",
          event: EventType.Click,
        },
      }),
      [InjuryPage.YourOffer]: () => ({
        birthdate: {
          value: "26/03/1997",
          event: EventType.Change,
          selector: "input[name='data.insuredList[0].birthDate']",
          withDelay: true,
        },
        name: {
          value: "Estensione",
          event: EventType.Change,
          selector: "input[name='contractor.firstName']",
          withDelay: true,
        },
        surname: {
          value: "BisTech",
          event: EventType.Change,
          selector: "input[name='contractor.lastName']",
          withDelay: true,
        },
        email: {
          value: "bis-tech@vitesicure.it",
          event: EventType.Change,
          selector: "input[name='contractor.email']",
          withDelay: true,
        },
        phone: {
          value: "3333333333",
          event: EventType.Change,
          selector: "input[name='contractor.phoneNumber']",
          withDelay: true,
        },
        privacyPolicy: {
          event: EventType.Click,
          withDelay: true,
          selector: "input[name='agreements.privacyPolicy']",
        },
      }),
      [InjuryPage.Contractor]: () => ({
        birthCity: {
          value: "Rimini",
          event: EventType.Change,
          selector: "input[name='contractor.birthCity']",
          withDelay: true,
        },
        gender: {
          value: "MALE",
          event: EventType.Change,
          selector: "input[name='contractor.gender']",
          withDelay: true,
        },
        fiscalCode: {
          event: EventType.ClickWithXpath,
          withDelay: true,
          selector: '//input[@name="contractor.fiscalCode"]/..//button',
        },
        maritalStatus: {
          value: "SINGLE",
          event: EventType.Change,
          selector: "input[name='contractor.maritalStatus']",
          withDelay: true,
        },
        familyUnitType: {
          value: "SINGLE",
          event: EventType.Change,
          selector: "input[name='contractor.familyUnitType']",
          withDelay: true,
        },
        questions: {
          event: EventType.ClickMultiples,
          selector: "div[data-testid] button:nth-child(2)",
        },
        confirmProtection: {
          event: EventType.ClickWithXpath,
          withDelay: true,
          selector:
            '//*[text()[contains(.,"Confermi di voler proteggere te stesso")]]/../../..//button[1]',
        },
        street: {
          value: "Albero",
          event: EventType.Change,
          selector: "input[name='street']",
          withDelay: true,
        },
        streetNumber: {
          value: "89",
          event: EventType.Change,
          selector: "input[name='streetNumber']",
          withDelay: true,
        },
        postalCode: {
          value: "47923",
          event: EventType.Change,
          selector: "input[name='postalCode']",
          withDelay: true,
        },
        city: {
          value: "RIMINI",
          event: EventType.Change,
          selector: "input[name='city']",
          withDelay: true,
        },
        province: {
          value: "RN",
          event: EventType.Change,
          selector: "input[name='province']",
          withDelay: true,
        },
        state: {
          value: "ITALIA",
          event: EventType.Change,
          selector: "input[name='state']",
          withDelay: true,
        },
      }),
      [InjuryPage.Checkout]: () => ({
        documentType: {
          value: "PASSPORT",
          event: EventType.Change,
          selector: "input[name='contractor.document.type']",
        },
        documentCode: {
          value: "ASD123",
          event: EventType.Change,
          selector: "input[name='contractor.document.code']",
          withDelay: true,
        },
        documentReleaseDate: {
          value: "30/03/2015",
          event: EventType.Change,
          selector: "input[name='contractor.document.releaseDate']",
          withDelay: true,
        },
        documentExpirationDate: {
          value: "30/03/2035",
          event: EventType.Change,
          selector: "input[name='contractor.document.expireDate']",
          withDelay: true,
        },
        documentReleasePlace: {
          value: "Roma",
          event: EventType.Change,
          selector: "input[name='contractor.document.releasePlace']",
          withDelay: true,
        },
        documentReleaseAuthority: {
          value: "PREFECTURE",
          event: EventType.Change,
          selector: "input[name='contractor.document.releaseAuthority']",
          withDelay: true,
        },
        dataThruthfulness: {
          event: EventType.Click,
          withDelay: true,
          selector: "div[data-testid='agreements.dataTruthfulness'] button",
        },
        termsAndConditions: {
          event: EventType.Click,
          withDelay: true,
          selector: "div[data-testid='agreements.termsAndConditions'] button",
        },
        limitationsAndExclusion: {
          event: EventType.Click,
          withDelay: true,
          selector:
            "div[data-testid='agreements.limitationsAndExclusion'] button",
        },
        privacyPolicyExtended: {
          event: EventType.Click,
          withDelay: true,
          selector:
            "div[data-testid='agreements.privacyPolicyExtended'] button",
        },
        oneYearPolicy: {
          event: EventType.Click,
          withDelay: true,
          selector: "div[data-testid='agreements.oneYearPolicy'] button",
        },
      }),
    },
  };

  public static getAutoFillData(product: string, page: string): AutoFillData {
    return this.autofillData[product][page]();
  }

  private static fakeBirthdate(maxAge: number = 70) {
    const date = faker.date.birthdate({
      max: maxAge,
      min: 18,
      mode: "age",
    });

    const year = date.getUTCFullYear();
    let month: number | string = date.getUTCMonth() + 1;
    const day = date.getUTCDate();

    if (month < 10) {
      month = "0" + month;
    }

    return `${day}/${month}/${year}`;
  }

  private static fakeName() {
    return faker.person.firstName();
  }

  private static fakeSurname() {
    return faker.person.lastName();
  }

  private static fakeEmail() {
    return faker.internet.email({ provider: "vitesicure.it" });
  }

  private static fakePhone() {
    return "3" + faker.string.numeric({ length: 9 });
  }

  private static fakeCity() {
    return faker.location.city();
  }

  private static fakeStreet() {
    return faker.location.street();
  }
}

export default AutoFillDataService;
