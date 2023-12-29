import FakeDataService from "../../services/fakeDataService";
import Page from "../page";

export default class CheckoutPage extends Page {
  public static path: string = "checkout";

  private documentType = "input[name='customerInfo.document.type']";
  private documentCode = "input[name='customerInfo.document.code']";
  private documentReleaseDate =
    "input[name='customerInfo.document.releaseDate']";
  private documentExpirationDate =
    "input[name='customerInfo.document.expireDate']";
  private documentReleasePlace =
    "input[name='customerInfo.document.releasePlace']";
  private documentReleaseAuthority =
    "input[name='customerInfo.document.releaseAuthority']";
  private medicalExams =
    "//*[text()[contains(.,'Rispondendo solo alle domande')]]/../../..//button[2]";

  private dataTruthfulness =
    "//*[text()='Acquistando la polizza dichiaro che tutte le informazioni inserite sono vere ed esatte e mi impegno a comunicare ogni variazione od integrazione delle stesse nel rispetto di quanto previsto dalla Legge sulle dichiarazioni rese in fase contrattuale.']/../../..//button[1]";

  private iban = "input[name='payment.ibanCode']";
  private ibanOwner =
    '//*[text()="Confermi di essere l\'intestatario del conto?"]/../../..//button[1]';

  private termsAndConditions =
    "//*[text()[contains(.,'Dichiaro di aver')]]/../../..//button[1]";
  private privacyPolicyExtended =
    "//*[text()[contains(.,'Autorizzo il trattamento dei miei dati personali per l'invio di comunicazioni')]]/../../..//button[1]";
  private otherPolicies =
    "//*[text()[contains(.,'Possiedi altre polizze come quelle che ci hai chiesto?')]]/../../..//button[1]";
  private confirmObligations =
    "//*[text()[contains(.,'Confermi che la Polizza deve soddisfare obblighi contrattuali (es. richiesto dalla banca)')]]/../../..//button[1]";

  autofill(): void {
    this.changeInputValue(this.documentType, "PASSPORT");
    this.withDelay(() => {
      this.changeInputValue(this.documentCode, "ASD123");
    });
    this.withDelay(() => {
      this.changeInputValue(this.documentReleaseDate, "01/01/2020");
    });
    this.withDelay(() => {
      this.changeInputValue(this.documentExpirationDate, "01/01/2030");
    });
    this.withDelay(() => {
      this.changeInputValue(this.documentReleasePlace, FakeDataService.city());
    });
    this.withDelay(() => {
      this.changeInputValue(this.documentReleaseAuthority, "PREFECTURE");
    });
    this.withDelay(() => {
      this.changeInputValue(this.iban, "IT80U0300203280965832926428");
    });
    this.withDelay(() => {
      this.clickWithXpath(this.ibanOwner);
    });
    this.withDelay(() => {
      this.clickWithXpath(this.medicalExams);
    });
    this.withDelay(() => {
      this.clickWithXpath(this.dataTruthfulness);
    });
    this.withDelay(() => {
      this.clickWithXpath(this.termsAndConditions);
    });
    this.withDelay(() => {
      this.clickWithXpath(this.privacyPolicyExtended);
    });
    this.withDelay(() => {
      this.clickWithXpath(this.otherPolicies);
    });
    this.withDelay(() => {
      this.clickWithXpath(this.confirmObligations);
    });
  }
}
