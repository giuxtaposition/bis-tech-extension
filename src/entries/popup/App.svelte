<script lang="ts">
  import { onMount } from "svelte";
  import Button from "~/lib/components/Button.svelte";
  import Switch from "~/lib/components/Switch.svelte";
  import MessengerService, {
    Location,
  } from "~/lib/services/messenger/messengerService";
  import WebextBridge from "~/lib/services/messenger/webextBridge";
  import OptionsSyncStorage from "~/lib/services/storage";

  const storage = OptionsSyncStorage.getInstance();
  const messenger = new MessengerService(new WebextBridge(), storage);

  let showPathBox = true;

  onMount(async () => {
    showPathBox = await storage.get("showPathBox");
  });

  $: saveShowPathBox = async function () {
    storage.set("showPathBox", showPathBox);

    messenger.send(
      Location.Popup,
      Location.ContentScript,
      showPathBox ? "load-path-box" : "remove-path-box",
    );
  };

  const autofill = async () => {
    await messenger.send(Location.Popup, Location.ContentScript, "auto-fill");
  };

  const autofillAndGoToNextPage = async () => {
    await messenger.send(Location.Popup, Location.ContentScript, "auto-fill", {
      goToNextPage: true,
    });
  };
</script>

<main>
  <Switch
    bind:checked={showPathBox}
    label="Show path box"
    onChange={saveShowPathBox}
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
