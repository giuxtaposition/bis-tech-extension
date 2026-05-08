import ConfigPage from "./configPage";
import BeneficiariesPage from "./life/beneficiariesPage";
import CheckoutPage from "./life/checkoutPage";
import PersonalDataPage from "./life/personalDataPage";
import PageFactory from "./pageFactory";
import { pagesPath } from "./paths";
import { Product } from "../../types";

describe("PageFactory tests", () => {
  it("should return correct page from product and path", () => {
    expect(PageFactory.getPage(Product.Life, pagesPath.life.preventivatore)).toBeInstanceOf(ConfigPage);
    expect(PageFactory.getPage(Product.Life, pagesPath.life.yourOffer)).toBeInstanceOf(ConfigPage);
    expect(PageFactory.getPage(Product.Life, pagesPath.life.health)).toBeInstanceOf(ConfigPage);
    expect(PageFactory.getPage(Product.Life, pagesPath.life.beneficiaries)).toBeInstanceOf(BeneficiariesPage);
    expect(PageFactory.getPage(Product.Life, pagesPath.life.personalData)).toBeInstanceOf(PersonalDataPage);
    expect(PageFactory.getPage(Product.Life, pagesPath.life.checkout)).toBeInstanceOf(CheckoutPage);

    expect(PageFactory.getPage(Product.PersonalAccident, pagesPath.personalAccident.yourOffer)).toBeInstanceOf(ConfigPage);
    expect(PageFactory.getPage(Product.PersonalAccident, pagesPath.personalAccident.policyHolder)).toBeInstanceOf(ConfigPage);
    expect(PageFactory.getPage(Product.PersonalAccident, pagesPath.personalAccident.checkout)).toBeInstanceOf(ConfigPage);
  });
});
