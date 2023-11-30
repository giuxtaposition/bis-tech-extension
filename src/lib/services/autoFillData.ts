export enum EventType {
  Change = "change",
  Click = "click",
  ClickMultiples = "clickMultiples",
  ClickWithXpath = "clickWithXpath",
  ClickNthChild = "ClickNthChild",
}

interface AutoFillData {
  [key: string]: {
    [key: string]: {
      [key: string]: {
        value?: string;
        child?: number;
        event: EventType;
      };
    };
  };
}

const autofillData: AutoFillData = {
  "caso-morte": {
    preventivatore: {
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
    "la-tua-offerta": {
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
    "stato-di-salute": {
      "div[data-testid] button:nth-child(2)": {
        event: EventType.ClickMultiples,
      },
      '//*[text()[contains(.,"Ai sensi della vigente normativa sulla Privacy,")]]/../../..//button[1]':
        {
          event: EventType.ClickWithXpath,
        },
    },
    beneficiari: {
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
    "dati-personali": {
      "input[name='customerInfo.birthCity']": {
        value: "Rimini",
        event: EventType.Change,
      },
      "input[name='customerInfo.gender']": {
        value: "FEMALE",
        event: EventType.Change,
      },
      button: {
        child: 1,
        event: EventType.ClickNthChild,
      },
      "input[name='customerInfo.job']": {
        value: "HOTELIER",
        event: EventType.Change,
      },
      "input[name='customerInfo.maritalStatus']": {
        value: "SINGLE",
        event: EventType.Change,
      },
      "input[name='customerInfo.familyUnitType']": {
        value: "SINGLE",
        event: EventType.Change,
      },
      "//*[text()='Sei una persona politicamente esposta e/o ricopri incarichi amministrativi pubblici importanti anche se non politici?']/../../..//button[2]":
        {
          event: EventType.ClickWithXpath,
        },
      "//*[text()='Confermi di voler ricevere tutte le informazioni via email?']/../../..//button[2]":
        {
          event: EventType.ClickWithXpath,
        },
      "input[name='street']": {
        value: "Albero",
        event: EventType.Change,
      },
      "input[name='streetNumber']": {
        value: "89",
        event: EventType.Change,
      },
      "input[name='postalCode']": {
        value: "47923",
        event: EventType.Change,
      },
      "input[name='city']": {
        value: "RIMINI",
        event: EventType.Change,
      },
      "input[name='province']": {
        value: "RN",
        event: EventType.Change,
      },
      "input[name='state']": {
        value: "ITALIA",
        event: EventType.Change,
      },
    },
    checkout: {
      "input[name='customerInfo.document.type']": {
        value: "DRIVING_LICENSE",
        event: EventType.Change,
      },
      "input[name='customerInfo.document.code']": {
        value: "ASD123",
        event: EventType.Change,
      },
      "input[name='customerInfo.document.releaseDate']": {
        value: "30/03/2015",
        event: EventType.Change,
      },
      "input[name='customerInfo.document.expireDate']": {
        value: "30/03/2035",
        event: EventType.Change,
      },
      "input[name='customerInfo.document.releasePlace']": {
        value: "Roma",
        event: EventType.Change,
      },
      "input[name='customerInfo.document.releaseAuthority']": {
        value: "PREFECTURE",
        event: EventType.Change,
      },
      '//*[text()[contains(.,"Rispondendo solo alle domande")]]/../../..//button[2]':
        {
          event: EventType.ClickWithXpath,
        },
      "input[name='payment.ibanCode']": {
        value: "IT80U0300203280965832926428",
        event: EventType.Change,
      },
      '//*[text()="Confermi di essere l\'intestatario del conto?"]/../../..//button[1]':
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
};

export default autofillData;
