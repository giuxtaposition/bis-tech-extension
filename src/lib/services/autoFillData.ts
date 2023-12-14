export enum EventType {
  Change = "change",
  Click = "click",
  ClickMultiples = "clickMultiples",
  ClickWithXpath = "clickWithXpath",
  ClickNthChild = "ClickNthChild",
}

enum LifePage {
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

interface AutoFillData {
  [key: string]: {
    [key: string]: {
      [key: string]: {
        value?: string;
        child?: number;
        withDelay?: boolean;
        event: EventType;
      };
    };
  };
}

const autofillData: AutoFillData = {
  "caso-morte": {
    [LifePage.Calculator]: {
      "input[name='customerInfo.birthDate']": {
        value: "26/03/1997",
        event: EventType.Change,
      },
      "input[name='data.smoker'][value='N']": {
        event: EventType.Click,
      },
      "input[name='agreements.privacyPolicy']": {
        event: EventType.Click,
      },
    },
    [LifePage.YourOffer]: {
      "input[name='customerInfo.firstName']": {
        value: "Estensione",
        event: EventType.Change,
      },
      "input[name='customerInfo.lastName']": {
        value: "Bis-Tech",
        event: EventType.Change,
      },
      "input[name='customerInfo.email']": {
        value: "bis-tech@vitesicure.it",
        event: EventType.Change,
      },
      "input[name='customerInfo.phoneNumber']": {
        value: "3333333333",
        event: EventType.Change,
      },
      "input[name='agreements.privacyPolicyBroker']": {
        event: EventType.Click,
      },
    },
    [LifePage.HealthStatus]: {
      '//*[text()[contains(.,"Ai sensi della vigente normativa sulla Privacy,")]]/../../..//button[1]':
        {
          event: EventType.ClickWithXpath,
        },
      "div[data-testid] button:nth-child(2)": {
        event: EventType.ClickMultiples,
      },
    },
    [LifePage.Beneficiaries]: {
      "input[name='beneficiaries.type']": {
        value: "LEGITIMATE_AND_TESTAMENTARY_HEIRS",
        event: EventType.Change,
      },
      "input[name='agreements.beneficiariesPurpose']": {
        event: EventType.Click,
      },
      "input[name='agreements.policyPurpose']": {
        event: EventType.Click,
      },
    },
    [LifePage.PersonalData]: {
      'input[name="customerInfo.gender"]': {
        value: "MALE",
        event: EventType.Change,
      },
      "input[name='customerInfo.birthCity']": {
        value: "Rimini",
        event: EventType.Change,
        withDelay: true,
      },
      '//input[@name="customerInfo.fiscalCode"]/..//button': {
        event: EventType.ClickWithXpath,
        withDelay: true,
      },
      "input[name='customerInfo.job']": {
        value: "HOTELIER",
        event: EventType.Change,
        withDelay: true,
      },
      "input[name='customerInfo.maritalStatus']": {
        value: "SINGLE",
        event: EventType.Change,
        withDelay: true,
      },
      "input[name='customerInfo.familyUnitType']": {
        value: "SINGLE",
        event: EventType.Change,
        withDelay: true,
      },
      "//*[text()='Sei una persona politicamente esposta e/o ricopri incarichi amministrativi pubblici importanti anche se non politici?']/../../..//button[2]":
        {
          event: EventType.ClickWithXpath,
          withDelay: true,
        },
      "//*[text()='Confermi di voler ricevere tutte le informazioni via email?']/../../..//button[2]":
        {
          event: EventType.ClickWithXpath,
          withDelay: true,
        },
      "input[name='street']": {
        value: "Albero",
        event: EventType.Change,
        withDelay: true,
      },
      "input[name='streetNumber']": {
        value: "89",
        event: EventType.Change,
        withDelay: true,
      },
      "input[name='postalCode']": {
        value: "47923",
        event: EventType.Change,
        withDelay: true,
      },
      "input[name='city']": {
        value: "RIMINI",
        event: EventType.Change,
        withDelay: true,
      },
      "input[name='province']": {
        value: "RN",
        event: EventType.Change,
        withDelay: true,
      },
      "input[name='state']": {
        value: "ITALIA",
        event: EventType.Change,
        withDelay: true,
      },
    },
    [LifePage.Checkout]: {
      "input[name='customerInfo.document.type']": {
        value: "PASSPORT",
        event: EventType.Change,
      },
      "input[name='customerInfo.document.code']": {
        value: "ASD123",
        event: EventType.Change,
        withDelay: true,
      },
      "input[name='customerInfo.document.releaseDate']": {
        value: "30/03/2015",
        event: EventType.Change,
        withDelay: true,
      },
      "input[name='customerInfo.document.expireDate']": {
        value: "30/03/2035",
        event: EventType.Change,
        withDelay: true,
      },
      "input[name='customerInfo.document.releasePlace']": {
        value: "Roma",
        event: EventType.Change,
        withDelay: true,
      },
      "input[name='customerInfo.document.releaseAuthority']": {
        value: "PREFECTURE",
        event: EventType.Change,
        withDelay: true,
      },
      '//*[text()[contains(.,"Rispondendo solo alle domande")]]/../../..//button[2]':
        {
          event: EventType.ClickWithXpath,
          withDelay: true,
        },
      "input[name='payment.ibanCode']": {
        value: "IT80U0300203280965832926428",
        event: EventType.Change,
        withDelay: true,
      },
      '//*[text()="Confermi di essere l\'intestatario del conto?"]/../../..//button[1]':
        {
          event: EventType.ClickWithXpath,
          withDelay: true,
        },
      '//*[text()="Acquistando la polizza dichiaro che tutte le informazioni inserite sono vere ed esatte e mi impegno a comunicare ogni variazione od integrazione delle stesse nel rispetto di quanto previsto dalla Legge sulle dichiarazioni rese in fase contrattuale."]/../../..//button[1]':
        {
          event: EventType.ClickWithXpath,
          withDelay: true,
        },
      '//*[text()[contains(.,"Dichiaro di aver")]]/../../..//button[1]': {
        event: EventType.ClickWithXpath,
        withDelay: true,
      },
      '//*[text()[contains(.,"Autorizzo il trattamento dei miei dati personali per l\'invio di comunicazioni")]]/../../..//button[1]':
        {
          event: EventType.ClickWithXpath,
          withDelay: true,
        },
      '//*[text()[contains(.,"Possiedi altre polizze come quelle che ci hai chiesto?")]]/../../..//button[1]':
        {
          event: EventType.ClickWithXpath,
          withDelay: true,
        },
      '//*[text()[contains(.,"Confermi che la Polizza deve soddisfare obblighi contrattuali (es. richiesto dalla banca)")]]/../../..//button[1]':
        {
          event: EventType.ClickWithXpath,
          withDelay: true,
        },
    },
  },
  vita: {
    [LifePage.Calculator]: {
      "input[name='birthDate']": {
        value: "26/03/1997",
        event: EventType.Change,
      },
      "input[name='smoker'][value='N']": {
        event: EventType.Click,
      },
      "input[name='privacyPolicyAccepted']": {
        event: EventType.Click,
      },
    },
    [LifePage.YourOffer]: {
      "input[name='contacts.name']": {
        value: "Estensione",
        event: EventType.Change,
      },
      "input[name='contacts.surname']": {
        value: "Bis-Tech",
        event: EventType.Change,
      },
      "input[name='contacts.email']": {
        value: "bis-tech@vitesicure.it",
        event: EventType.Change,
      },
      "input[name='contacts.phone']": {
        value: "3333333333",
        event: EventType.Change,
      },
      "input[name='contacts.privacyPolicyAccepted']": {
        event: EventType.Click,
      },
    },
    [LifePage.HealthStatus]: {
      'input[name="height"]': {
        event: EventType.Change,
        value: "170",
      },
      'input[name="weight"]': {
        event: EventType.Change,
        value: "80",
      },
      'input[name="privacyPolicyAccepted"]': {
        event: EventType.Click,
      },
      "div[data-testid] button:nth-child(2)": {
        event: EventType.ClickMultiples,
      },
    },
    [LifePage.Beneficiaries]: {
      "input[name='beneficiaries.beneficiariesType']": {
        value: "legitimateAndTestamentaryHeirs",
        event: EventType.Change,
      },
      "input[name='compliance.capitalToBeneficiaries']": {
        event: EventType.Click,
      },
      "input[name='compliance.insuranceIsNotSavings']": {
        event: EventType.Click,
      },
    },
    [LifePage.PersonalData]: {
      "input[name='cityOfBirth']": {
        value: "Rimini",
        event: EventType.Change,
      },
      "input[name='gender']": {
        value: "MALE",
        event: EventType.Change,
      },
      '//input[@name="fiscalCode"]/..//button': {
        event: EventType.ClickWithXpath,
      },
      "input[name='profession']": {
        value: "LIVESTOCK_BREEDER",
        event: EventType.Change,
      },
      "input[name='maritalStatus']": {
        value: "Single",
        event: EventType.Change,
      },
      "input[name='familyUnitType']": {
        value: "Single",
        event: EventType.Change,
      },
      '//*[text()[contains(.,"persona politicamente esposta")]]/../../..//button[2]':
        {
          event: EventType.ClickWithXpath,
        },
      '//*[text()[contains(.,"tutte le informazioni via email")]]/../../..//button[2]':
        {
          event: EventType.ClickWithXpath,
        },
      "input[name='residence.address.street']": {
        value: "Albero",
        event: EventType.Change,
      },
      "input[name='residence.address.streetNumber']": {
        value: "89",
        event: EventType.Change,
      },
      "input[name='residence.address.postalCode']": {
        value: "47923",
        event: EventType.Change,
      },
      "input[name='residence.city.name']": {
        value: "RIMINI",
        event: EventType.Change,
      },
      "input[name='residence.province.name']": {
        value: "RN",
        event: EventType.Change,
      },
      "input[name='residence.state.name']": {
        value: "ITALIA",
        event: EventType.Change,
      },
    },
    [LifePage.Checkout]: {
      "input[name='insured.document.type']": {
        value: "passport",
        event: EventType.Change,
      },
      "input[name='insured.document.code']": {
        value: "ASD123",
        event: EventType.Change,
      },
      "input[name='insured.document.releaseDate']": {
        value: "30/03/2015",
        event: EventType.Change,
      },
      "input[name='insured.document.expireDate']": {
        value: "30/03/2035",
        event: EventType.Change,
      },
      "input[name='insured.document.releasePlace']": {
        value: "Roma",
        event: EventType.Change,
      },
      "input[name='insured.document.releaseAuthority']": {
        value: "prefecture",
        event: EventType.Change,
      },
      '//*[text()[contains(.,"Rispondendo solo alle domande")]]/../../..//button[2]':
        {
          event: EventType.ClickWithXpath,
        },
      '//*[text()="Acquistando la polizza dichiaro che tutte le informazioni inserite sono vere ed esatte e mi impegno a comunicare ogni variazione od integrazione delle stesse nel rispetto di quanto previsto dalla Legge sulle dichiarazioni rese in fase contrattuale."]/../../..//button[1]':
        {
          event: EventType.ClickWithXpath,
        },
      '//*[text()[contains(.,"Dichiaro di aver")]]/../../..//button[1]': {
        event: EventType.ClickWithXpath,
      },
      '//*[text()[contains(.,"Autorizzo il trattamento dei miei dati personali per l\'invio di comunicazioni")]]/../../..//button[1]':
        {
          event: EventType.ClickWithXpath,
        },
      '//*[text()[contains(.,"Possiedi altre polizze come quelle che ci hai chiesto?")]]/../../..//button[1]':
        {
          event: EventType.ClickWithXpath,
        },
      '//*[text()[contains(.,"Confermi che la Polizza deve soddisfare obblighi contrattuali (es. richiesto dalla banca)")]]/../../..//button[1]':
        {
          event: EventType.ClickWithXpath,
        },
    },
  },
  infortuni: {
    [InjuryPage.YourOffer]: {
      "input[name='data.insuredList[0].birthDate']": {
        value: "26/03/1997",
        event: EventType.Change,
        withDelay: true,
      },
      "input[name='contractor.firstName']": {
        value: "Estensione",
        event: EventType.Change,
        withDelay: true,
      },
      "input[name='contractor.lastName']": {
        value: "BisTech",
        event: EventType.Change,
        withDelay: true,
      },
      "input[name='contractor.email']": {
        value: "bis-tech@vitesicure.it",
        event: EventType.Change,
        withDelay: true,
      },
      "input[name='contractor.phoneNumber']": {
        value: "3333333333",
        event: EventType.Change,
        withDelay: true,
      },
      "input[name='agreements.privacyPolicy']": {
        event: EventType.Click,
        withDelay: true,
      },
    },
    [InjuryPage.Contractor]: {
      "input[name='contractor.birthCity']": {
        value: "Rimini",
        event: EventType.Change,
        withDelay: true,
      },
      "input[name='contractor.gender']": {
        value: "MALE",
        event: EventType.Change,
        withDelay: true,
      },
      '//input[@name="contractor.fiscalCode"]/..//button': {
        event: EventType.ClickWithXpath,
        withDelay: true,
      },
      "input[name='contractor.maritalStatus']": {
        value: "SINGLE",
        event: EventType.Change,
        withDelay: true,
      },
      "input[name='contractor.familyUnitType']": {
        value: "SINGLE",
        event: EventType.Change,
        withDelay: true,
      },
      "div[data-testid] button:nth-child(2)": {
        event: EventType.ClickMultiples,
      },
      '//*[text()[contains(.,"Confermi di voler proteggere te stesso")]]/../../..//button[1]':
        {
          event: EventType.ClickWithXpath,
          withDelay: true,
        },
      "input[name='street']": {
        value: "Albero",
        event: EventType.Change,
        withDelay: true,
      },
      "input[name='streetNumber']": {
        value: "89",
        event: EventType.Change,
        withDelay: true,
      },
      "input[name='postalCode']": {
        value: "47923",
        event: EventType.Change,
        withDelay: true,
      },
      "input[name='city']": {
        value: "RIMINI",
        event: EventType.Change,
        withDelay: true,
      },
      "input[name='province']": {
        value: "RN",
        event: EventType.Change,
        withDelay: true,
      },
      "input[name='state']": {
        value: "ITALIA",
        event: EventType.Change,
        withDelay: true,
      },
    },
    [InjuryPage.Checkout]: {
      "input[name='contractor.document.type']": {
        value: "PASSPORT",
        event: EventType.Change,
      },
      "input[name='contractor.document.code']": {
        value: "ASD123",
        event: EventType.Change,
        withDelay: true,
      },
      "input[name='contractor.document.releaseDate']": {
        value: "30/03/2015",
        event: EventType.Change,
        withDelay: true,
      },
      "input[name='contractor.document.expireDate']": {
        value: "30/03/2035",
        event: EventType.Change,
        withDelay: true,
      },
      "input[name='contractor.document.releasePlace']": {
        value: "Roma",
        event: EventType.Change,
        withDelay: true,
      },
      "input[name='contractor.document.releaseAuthority']": {
        value: "PREFECTURE",
        event: EventType.Change,
        withDelay: true,
      },
      "div[data-testid='agreements.dataTruthfulness'] button": {
        event: EventType.Click,
        withDelay: true,
      },
      "div[data-testid='agreements.termsAndConditions'] button": {
        event: EventType.Click,
        withDelay: true,
      },
      "div[data-testid='agreements.limitationsAndExclusion'] button": {
        event: EventType.Click,
        withDelay: true,
      },
      "div[data-testid='agreements.privacyPolicyExtended'] button": {
        event: EventType.Click,
        withDelay: true,
      },
      "div[data-testid='agreements.oneYearPolicy'] button": {
        event: EventType.Click,
        withDelay: true,
      },
    },
  },
};

export default autofillData;
