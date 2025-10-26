import { test } from "./fixtures";
import { LIFE_PAGES } from "../src/lib/pages/constants";

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
    await page.waitForURL(`**/${LIFE_PAGES.YOUR_OFFER}**`);

    await page.waitForTimeout(1000);
    await extensionPage.getByText("Autofill and go to next page").dblclick();
    await page.waitForURL(`**/${LIFE_PAGES.HEALTH_STATUS}`);

    await page.waitForTimeout(1000);
    await extensionPage.getByText("Autofill and go to next page").dblclick();
    await page.waitForURL(`**/${LIFE_PAGES.BENEFICIARIES}`, { timeout: 50000 });

    await page.waitForTimeout(1000);
    await extensionPage.getByText("Autofill and go to next page").dblclick();
    await page.waitForURL(`**/${LIFE_PAGES.PERSONAL_DATA}`);

    await page.waitForTimeout(1000);
    await extensionPage.getByText("Autofill and go to next page").dblclick();
    await page.waitForURL(`**/${LIFE_PAGES.CHECKOUT}`);
    await page.waitForTimeout(1000);
    await extensionPage.getByText("Autofill and go to next page").dblclick();
    await page.waitForURL(`**/grazie**`, { timeout: 30000 });
  });
});
