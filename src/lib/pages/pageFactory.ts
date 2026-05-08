import ConfigPage, { type PageConfig } from "./configPage";
import BeneficiariesPage from "./life/beneficiariesPage";
import CheckoutPage from "./life/checkoutPage";
import PersonalDataPage from "./life/personalDataPage";
import type Page from "./page";
import { pagesPath } from "./paths";
import { Product } from "../../types";

const lifeConfigs: PageConfig[] = [
  {
    path: pagesPath.life.preventivatore,
    actions: [
      { type: "click", selector: "input[name='smoker'][value='N']" },
      { type: "checkbox", selector: "input[name='privacyPolicyAccepted']" },
      {
        type: "click",
        selector:
          "[data-testid='duration-slider'] [data-testid='slider.bar'] [data-index='2'][aria-hidden=true]",
      },
      {
        type: "click",
        selector:
          "[data-testid='capital-slider'] [data-testid='slider.bar'] [data-index='2'][aria-hidden=true]",
      },
    ],
  },
  {
    path: pagesPath.life.yourOffer,
    actions: [
      {
        type: "checkbox",
        selector: "input[name='contacts.privacyPolicyAccepted']",
      },
      {
        type: "clickMultiples",
        selector: "div[data-testid] button:nth-child(2)",
      },
    ],
  },
  {
    path: pagesPath.life.health,
    actions: [
      { type: "fill", selector: "input[name='height']", value: "170" },
      { type: "fill", selector: "input[name='weight']", value: "80" },
      { type: "checkbox", selector: "input[name='privacyPolicyAccepted']" },
      {
        type: "clickMultiples",
        selector: "div[data-testid] button:nth-child(2)",
      },
    ],
  },
];

const personalAccidentConfigs: PageConfig[] = [
  {
    path: pagesPath.personalAccident.yourOffer,
    actions: [
      {
        type: "checkbox",
        selector: "input[name='privacyPolicyAccepted']",
        delay: true,
      },
      {
        type: "clickMultiples",
        selector: "div[data-testid] button:nth-child(2)",
      },
    ],
  },
  {
    path: pagesPath.personalAccident.policyHolder,
    actions: [
      {
        type: "xpathClick",
        selector: '//input[@name="contractor.fiscalCode"]/..//button',
        delay: true,
      },
      {
        type: "clickMultiples",
        selector: "div[data-testid] button:nth-child(2)",
        delay: true,
      },
      {
        type: "xpathClick",
        selector:
          "//*[text()[contains(.,'Confermi di voler proteggere te stesso')]]/../../..//button[1]",
        delay: true,
      },
      {
        type: "xpathClick",
        selector:
          "//*[text()[contains(.,'Il Contraente della Polizza')]]/../../..//button[1]",
        delay: true,
      },
      {
        type: "xpathClick",
        selector:
          "//*[text()='Sei una persona politicamente esposta e/o ricopri incarichi amministrativi pubblici importanti anche se non politici?']/../../..//button[2]",
        delay: true,
      },
      {
        type: "xpathClick",
        selector:
          "//*[text()='Confermi di voler ricevere tutte le informazioni via email?']/../../..//button[2]",
        delay: true,
      },
    ],
  },
  {
    path: pagesPath.personalAccident.checkout,
    actions: [
      {
        type: "click",
        selector:
          "div[data-testid='question-compliance.dataTruthfulness'] button",
        delay: true,
      },
      {
        type: "click",
        selector:
          "div[data-testid='question-compliance.termsAndConditions'] button",
        delay: true,
      },
      {
        type: "click",
        selector:
          "div[data-testid='question-compliance.understandLimitationsAndExclusions'] button",
        delay: true,
      },
      {
        type: "click",
        selector:
          "div[data-testid='question-compliance.privacyPolicyExtended'] button",
        delay: true,
      },
      {
        type: "click",
        selector:
          "div[data-testid='question-compliance.oneYearDurationAndAutomaticRenewal'] button",
        delay: true,
      },
    ],
  },
];

const toEntries = (configs: PageConfig[]): [string, Page][] =>
  configs.map((c) => [c.path, new ConfigPage(c)]);

export default class PageFactory {
  private static readonly pageMap = new Map<string, Map<string, Page>>([
    [
      Product.Life,
      new Map<string, Page>([
        ...toEntries(lifeConfigs),
        [BeneficiariesPage.path, new BeneficiariesPage()],
        [PersonalDataPage.path, new PersonalDataPage()],
        [CheckoutPage.path, new CheckoutPage()],
      ]),
    ],
    [
      Product.PersonalAccident,
      new Map<string, Page>([...toEntries(personalAccidentConfigs)]),
    ],
  ]);

  static getPage(product: string, path: string) {
    return this.pageMap.get(product)?.get(path);
  }
}
