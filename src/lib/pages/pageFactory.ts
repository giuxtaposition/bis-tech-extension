import InjuryCheckoutPage from "./injury/checkoutPage";
import ContractorPage from "./injury/contractorPage";
import SelectPage from "./injury/selectPage";
import InjuryYourOfferPage from "./injury/yourOfferPage";
import BeneficiariesPage from "./life/beneficiariesPage";
import CheckoutPage from "./life/checkoutPage";
import HealthStatusPage from "./life/healthStatusPage";
import PersonalDataPage from "./life/personalDataPage";
import PreventivatorePage from "./life/preventivatorePage";
import YourOfferPage from "./life/yourOfferPage";
import type Page from "./page";

export default class PageFactory {
  private static readonly pageMap = new Map<string, Map<string, Page>>([
    [
      "vita",
      new Map<string, Page>([
        [PreventivatorePage.path, new PreventivatorePage()],
        [YourOfferPage.path, new YourOfferPage()],
        [HealthStatusPage.path, new HealthStatusPage()],
        [BeneficiariesPage.path, new BeneficiariesPage()],
        [PersonalDataPage.path, new PersonalDataPage()],
        [CheckoutPage.path, new CheckoutPage()],
      ]),
    ],
    [
      "infortuni",
      new Map<string, Page>([
        [SelectPage.path, new SelectPage()],
        [InjuryYourOfferPage.path, new InjuryYourOfferPage()],
        [ContractorPage.path, new ContractorPage()],
        [InjuryCheckoutPage.path, new InjuryCheckoutPage()],
      ]),
    ],
  ]);

  static getPage(product: string, path: string) {
    return this.pageMap.get(product).get(path);
  }
}
