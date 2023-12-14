/// <reference types="vitest" />
import { defineConfig, loadEnv } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import webExtension from "@samrum/vite-plugin-web-extension";
import path from "path";
import { getManifest } from "./src/manifest";

const isFirefox = process.env.EXTENSION === "firefox";
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      svelte(),
      process.env.ENVIRONMENT === "storybook" ||
      process.env.ENVIRONMENT === "test"
        ? null
        : webExtension({
            manifest: getManifest(Number(env.MANIFEST_VERSION)),
            useDynamicUrlWebAccessibleResources: isFirefox ? false : true,
          }),
    ],
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "./src"),
      },
    },
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./src/tests/setup.ts",
    },
  };
});
