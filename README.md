# 🥩 Bis-Tech Extension

[![Tests](https://github.com/giuxtaposition/bis-tech-extension/actions/workflows/tests.yml/badge.svg)](https://github.com/giuxtaposition/bis-tech-extension/actions/workflows/tests.yml)
[![Release](https://img.shields.io/github/v/release/giuxtaposition/bis-tech-extension.svg?maxAge=3600&label=release)](https://github.com/giuxtaposition/bis-tech-extension/releases)

Bis-Tech extension is a web extension to make life easier for vitesicure product team helping them test faster the various products offered by vitesicure.

![](/.github/images/path-box.png)
![](/.github/images/popup.png)

## Features

- Visual Box to show current product.
- Autofill page.
- Autofill page and continue to next page.

## Permissions required

- `"http://calc-local.vitesicure.it:3000/*"`, `"https://calc-dev.vitesicure.it/*"`, `"https://calc-staging.vitesicure.it/*"` - for running on the vitesicure dev environments.
- `"http://calc-local.bridgebroker.it:3000/*"`, `"https://calc-dev.bridgebroker.it/*"`, `"https://calc-staging.bridgebroker.it/*"` - for running on the bridgebroker dev environments.
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

### Testing

```sh
pnpm test # unit tests
pnpm build-and-test-e2e # e2e tests, extension must be built first
pnpm test:e2e # for when extension has been already built
```

> [!NOTE]  
> Right now firefox and chromium commands are separated because firefox does not support ManifestV3 completely (it still doesn't support `background.service_worker`).
