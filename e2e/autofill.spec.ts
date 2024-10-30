import { test } from "./fixtures";
import YourOfferPage from "../src/lib/pages/life/yourOfferPage";
import HealthStatusPage from "../src/lib/pages/life/healthStatusPage";
import BeneficiariesPage from "../src/lib/pages/life/beneficiariesPage";
import PersonalDataPage from "../src/lib/pages/life/personalDataPage";
import CheckoutPage from "../src/lib/pages/life/checkoutPage";

test.describe("Autofill", () => {
  test(`in /vita path, when user goes to the next page, should still render path box`, async ({
    page,
    context,
    extensionId,
  }) => {
    const extensionPage = await context.newPage();
    await page.goto(`https://calc-dev.vitesicure.it/vita/preventivatore`);

    await page.waitForLoadState("networkidle");

    await extensionPage.goto(
      `chrome-extension://${extensionId}/src/entries/popup/index.html`,
    );

    await page.waitForTimeout(1000);
    await extensionPage.getByText("Autofill and go to next page").dblclick();

    await page.bringToFront();
    await page.waitForURL(`**/${YourOfferPage.path}**`);

    await page.waitForTimeout(1000);
    await extensionPage.getByText("Autofill and go to next page").dblclick();
    await page.waitForURL(`**/${HealthStatusPage.path}`);

    await page.waitForTimeout(1000);
    await extensionPage.getByText("Autofill and go to next page").dblclick();
    await page.waitForURL(`**/${BeneficiariesPage.path}`, { timeout: 50000 });

    await page.waitForTimeout(1000);
    await extensionPage.getByText("Autofill and go to next page").dblclick();
    await page.waitForURL(`**/${PersonalDataPage.path}`);

    await page.waitForTimeout(1000);
    await extensionPage.getByText("Autofill and go to next page").dblclick();
    await page.waitForURL(`**/${CheckoutPage.path}`);
    await page.waitForTimeout(1000);
    await extensionPage.getByText("Autofill and go to next page").dblclick();
    await page.waitForURL(`**/grazie**`, { timeout: 30000 });
  });
});
