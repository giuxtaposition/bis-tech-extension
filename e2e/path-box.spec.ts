import { test, expect } from "./fixtures.ts";

test.describe("PathBox", () => {
  const paths = ["vita", "caso-morte", "infortuni"];

  for (const path of paths) {
    test(`in /${path} path, should render path box`, async ({ page }) => {
      await page.goto(`https://calc-dev.vitesicure.it/${path}`);

      await page.waitForSelector("#vitesicure-path-box", { timeout: 50000 });

      await expect(page.locator("#vitesicure-path-box #path-box")).toHaveText(
        path,
        {
          ignoreCase: true,
        },
      );
    });

    test(`in /${path} path, when user goes to the next page, should still render path box`, async ({
      page,
      context,
      extensionId,
    }) => {
      const extensionPage = await context.newPage();
      await page.goto(`https://calc-dev.vitesicure.it/${path}`);

      await page.waitForLoadState("networkidle");

      await extensionPage.goto(
        `chrome-extension://${extensionId}/src/entries/popup/index.html`,
      );

      await extensionPage.getByText("Autofill and go to next page").dblclick();

      await page.bringToFront();
      await page.waitForURL(/.*(la-tua-offerta)|(la-tua-polizza-infortuni)$/);

      await page.waitForSelector("#vitesicure-path-box", {
        timeout: 50000,
      });

      await expect(page.locator("#vitesicure-path-box #path-box")).toHaveText(
        path,
        {
          ignoreCase: true,
        },
      );
    });
  }
});
