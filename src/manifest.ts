import pkg from "../package.json";
const isFirefox = process.env.EXTENSION === "firefox";

const sharedManifest: Partial<chrome.runtime.ManifestBase> = {
  content_scripts: [
    {
      js: ["src/entries/contentScript/primary/main.ts"],
      matches: [
        "http://calc-local.vitesicure.it:3000/*",
        "https://calc-dev.vitesicure.it/*",
        "https://calc-staging.vitesicure.it/*",
        "http://calc-local.bridgebroker.it:3000/*",
        "https://calc-dev.bridgebroker.it/*",
        "https://calc-staging.bridgebroker.it/*",
      ],
    },
  ],
  icons: {
    16: "icons/16.png",
    32: "icons/32.png",
    180: "icons/180.png",
    192: "icons/192.png",
    512: "icons/512.png",
  },
  options_ui: {
    page: "src/entries/options/index.html",
    open_in_tab: true,
  },
  permissions: ["tabs", "storage", "activeTab", "webNavigation", "scripting"],
  browser_specific_settings: {
    gecko: {
      id: "bis-tech-extension@vitesicure.it",
    },
  },
};

const browserAction = {
  default_icon: {
    16: "icons/16.png",
    32: "icons/32.png",
  },
  default_popup: "src/entries/popup/index.html",
};

const ManifestV2 = {
  ...sharedManifest,
  background: {
    scripts: ["src/entries/background/script.ts"],
    persistent: true,
  },
  browser_action: browserAction,
  options_ui: {
    ...sharedManifest.options_ui,
    chrome_style: false,
  },
  permissions: [...sharedManifest.permissions, "*://*/*"],
};

const ManifestV3 = {
  ...sharedManifest,
  action: browserAction,
  background: isFirefox
    ? {
        scripts: ["src/entries/background/serviceWorker.ts"],
      }
    : {
        service_worker: "src/entries/background/serviceWorker.ts",
      },
  host_permissions: ["*://*/*"],
};

export function getManifest(
  manifestVersion: number,
): chrome.runtime.ManifestV2 | chrome.runtime.ManifestV3 {
  const manifest = {
    author: pkg.author,
    description: pkg.description,
    name: pkg.displayName ?? pkg.name,
    version: pkg.version,
  };

  if (manifestVersion === 2) {
    return {
      ...manifest,
      ...ManifestV2,
      manifest_version: manifestVersion,
    };
  }

  if (manifestVersion === 3) {
    return {
      ...manifest,
      ...ManifestV3,
      manifest_version: manifestVersion,
    };
  }

  throw new Error(
    `Missing manifest definition for manifestVersion ${manifestVersion}`,
  );
}
