import ConfigPage from "./configPage";
import BeneficiariesPage from "./life/beneficiariesPage";
import CheckoutPage from "./life/checkoutPage";
import PersonalDataPage from "./life/personalDataPage";
import PageFactory from "./pageFactory";

describe("PageFactory tests", () => {
  it("should return correct page from product and path", () => {
    expect(PageFactory.getPage("vita", "preventivatore")).toBeInstanceOf(ConfigPage);
    expect(PageFactory.getPage("vita", "la-tua-offerta")).toBeInstanceOf(ConfigPage);
    expect(PageFactory.getPage("vita", "stato-di-salute")).toBeInstanceOf(ConfigPage);
    expect(PageFactory.getPage("vita", "beneficiari")).toBeInstanceOf(BeneficiariesPage);
    expect(PageFactory.getPage("vita", "dati-personali")).toBeInstanceOf(PersonalDataPage);
    expect(PageFactory.getPage("vita", "checkout")).toBeInstanceOf(CheckoutPage);

    expect(PageFactory.getPage("infortuni", "seleziona")).toBeInstanceOf(ConfigPage);
    expect(PageFactory.getPage("infortuni", "la-tua-polizza-infortuni")).toBeInstanceOf(ConfigPage);
    expect(PageFactory.getPage("infortuni", "contraente")).toBeInstanceOf(ConfigPage);
    expect(PageFactory.getPage("infortuni", "checkout")).toBeInstanceOf(ConfigPage);
  });
});
