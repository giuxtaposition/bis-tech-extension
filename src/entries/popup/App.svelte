<script lang="ts">
  import { onMount } from "svelte";
  import Button from "~/lib/components/Button.svelte";
  import Switch from "~/lib/components/Switch.svelte";
  import MessagingService from "~/lib/services/messagingService/messagingService";
  import OptionsSyncStorage from "~/lib/services/storage";

  const storage = OptionsSyncStorage.getInstance();

  let showPathBox = $state(true);
  let debugMode = $state(false);

  onMount(async () => {
    showPathBox = await storage.get("showPathBox");
    debugMode = await storage.get("debugMode");
  });

  const saveShowPathBox = () => storage.set("showPathBox", showPathBox);
  const saveDebugMode = () => storage.set("debugMode", debugMode);

  $effect(() => {
    MessagingService.send(debugMode ? "set-debug-mode" : "unset-debug-mode");
  });

  $effect(() => {
    MessagingService.send(showPathBox ? "load-path-box" : "remove-path-box");
  });

  const autofill = async () => {
    await MessagingService.send("auto-fill");
  };

  const autofillAndGoToNextPage = async () => {
    await MessagingService.send("auto-fill", { goToNextPage: true });
  };
</script>

<main>
  <Switch
    bind:checked={showPathBox}
    label="Show path box"
    onChange={saveShowPathBox}
  />
  <Switch
    bind:checked={debugMode}
    label="Debug mode"
    onChange={saveDebugMode}
  />
  <Button label="Autofill page" onClick={autofill} />
  <Button
    label="Autofill and go to next page"
    onClick={autofillAndGoToNextPage}
  />
</main>

<style>
  main {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.5rem;
    width: 300px;
  }
</style>
