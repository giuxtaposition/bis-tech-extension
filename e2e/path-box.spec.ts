import { type Page } from "@playwright/test";
import { test, expect } from "./fixtures";

test.describe("PathBox", () => {
  const paths = ["vita", "caso-morte", "infortuni"];

  for (const path of paths) {
    test(`in /${path} path, should render path box`, async ({ page }) => {
      await page.goto(`https://calc-dev.vitesicure.it/${path}`);

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
      await page.goto(
        `https://calc-dev.vitesicure.it/${
          path === "caso-morte" ? "caso-morte?no-redirect=true" : path
        }`,
      );

      await page.waitForLoadState("networkidle");

      await fillAndGoToNextPage(page, path);

      await page.waitForURL(/.*(la-tua-offerta)|(la-tua-polizza-infortuni)$/);

      await expect(page.locator("#vitesicure-path-box #path-box")).toHaveText(
        path,
        {
          ignoreCase: true,
        },
      );
    });
  }
});

async function fillAndGoToNextPage(page: Page, path: string) {
  switch (path) {
    case "vita":
      await page.fill("input[name='birthDate']", "26/03/1997");
      await page.click("input[name='privacyPolicyAccepted']");
      await page.click("button[data-testid='calculate-offer-button']");
      break;
    case "caso-morte":
      await page.fill("input[name='customerInfo.birthDate']", "26/03/1997");
      await page.click("input[name='agreements.privacyPolicy']");
      await page.click("button[data-testid='calculate-quote-button']");
      break;
    case "infortuni":
      await page.click("div[data-testid='injury-select-me']");
      const continueButton = page.locator("button", {
        hasText: "Continua",
      });
      await continueButton.click();
      break;
  }
}
