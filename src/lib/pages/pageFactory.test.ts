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
import PageFactory from "./pageFactory";

describe("PageFactory tests", () => {
  it("should return correct page from product and path", () => {
    expect(PageFactory.getPage("vita", "preventivatore")).toBeInstanceOf(
      PreventivatorePage,
    );
    expect(PageFactory.getPage("vita", "la-tua-offerta")).toBeInstanceOf(
      YourOfferPage,
    );
    expect(PageFactory.getPage("vita", "stato-di-salute")).toBeInstanceOf(
      HealthStatusPage,
    );
    expect(PageFactory.getPage("vita", "beneficiari")).toBeInstanceOf(
      BeneficiariesPage,
    );
    expect(PageFactory.getPage("vita", "dati-personali")).toBeInstanceOf(
      PersonalDataPage,
    );
    expect(PageFactory.getPage("vita", "checkout")).toBeInstanceOf(
      CheckoutPage,
    );

    expect(PageFactory.getPage("infortuni", "seleziona")).toBeInstanceOf(
      SelectPage,
    );
    expect(
      PageFactory.getPage("infortuni", "la-tua-polizza-infortuni"),
    ).toBeInstanceOf(InjuryYourOfferPage);
    expect(PageFactory.getPage("infortuni", "contraente")).toBeInstanceOf(
      ContractorPage,
    );
    expect(PageFactory.getPage("infortuni", "checkout")).toBeInstanceOf(
      InjuryCheckoutPage,
    );
  });
});
