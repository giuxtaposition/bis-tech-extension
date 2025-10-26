import { test } from "./fixtures";
import { pagesPath } from "../src/lib/pages/paths";

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
    await page.waitForURL(`**/${pagesPath.life.yourOffer}**`);

    await page.waitForTimeout(1000);
    await extensionPage.getByText("Autofill and go to next page").dblclick();
    await page.waitForURL(`**/${pagesPath.life.health}`);

    await page.waitForTimeout(1000);
    await extensionPage.getByText("Autofill and go to next page").dblclick();
    await page.waitForURL(`**/${pagesPath.life.beneficiaries}`, { timeout: 50000 });

    await page.waitForTimeout(1000);
    await extensionPage.getByText("Autofill and go to next page").dblclick();
    await page.waitForURL(`**/${pagesPath.life.personalData}`);

    await page.waitForTimeout(1000);
    await extensionPage.getByText("Autofill and go to next page").dblclick();
    await page.waitForURL(`**/${pagesPath.life.checkout}`);
    await page.waitForTimeout(1000);
    await extensionPage.getByText("Autofill and go to next page").dblclick();
    await page.waitForURL(`**/grazie**`, { timeout: 30000 });
  });
});
