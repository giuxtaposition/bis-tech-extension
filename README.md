# 🥩 Bis-Tech Extension

Bis-Tech extension is a web extension to make life easier for vitesicure product team helping them test faster the various products offered by vitesicure.

## Features

- Visual Box to show current product.
- Autofill page.
- Autofill page and continue to next page.

## Permissions required

- `"http://localhost:3000/*"`, `"https://calc-dev.vitesicure.it/*"`, `"https://calc-staging.vitesicure.it/*"` - for running on the vitesicure dev environments.
- `storage` - for storing user preferences and needed tabs info.
- `tabs, activeTab, webNavigation and scription` - for actually doing what the extension offers.

## Commands

### Build

#### Development, HMR

Hot Module Reloading is used to load changes inline without requiring extension rebuilds and extension/page reloads
Currently only works in Chromium based browsers.

```sh
pnpm run dev #for chromium
pnpm run dev-firefox #for firefox
```

#### Development, Watch

Rebuilds extension on file changes. Requires a reload of the extension (and page reload if using content scripts)

```sh
pnpm run watch #for chromium
pnpm run watch-firefox #for firefox
```

#### Production

Minifies and optimizes extension build

```sh
pnpm run build #for chromium
pnpm run build-firefox #for firefox
```

### Load extension in browser

Loads the contents of the dist directory into the specified browser

```sh
pnpm serve:chrome
pnpm serve:firefox
```

> [!NOTE]  
> Right now firefox and chromium commands are separated because firefox does not support ManifestV3 completely (it still doesn't support `background.service_worker`).
