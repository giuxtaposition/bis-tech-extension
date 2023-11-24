export enum EventType {
  Change = "change",
  Click = "click",
  ClickMultiples = "clickMultiples",
  ClickWithXpath = "clickWithXpath",
}

interface AutoFillData {
  [key: string]: {
    [key: string]: {
      [key: string]: {
        value?: string;
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
      "//*[text()='Ai sensi della vigente normativa sulla Privacy, per la conclusione e gestione del contratto, confermi il tuo consenso al trattamento delle particolari categorie di dati che riguardano il suo stato di salute?']/../../..//button[2]":
        {
          event: EventType.ClickWithXpath,
        },
    },
  },
};

export default autofillData;
