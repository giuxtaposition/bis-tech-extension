<script lang="ts">
  import { onMount } from "svelte";
  import Button from "~/lib/components/Button.svelte";
  import Switch from "~/lib/components/Switch.svelte";
  import MessengerService from "~/lib/services/messenger/messengerService";
  import BrowserMessagingClient from "~/lib/services/messenger/messagingClient";
  import OptionsSyncStorage from "~/lib/services/storage";
  import TabsService from "~/lib/services/tabsService";

  const storage = OptionsSyncStorage.getInstance();
  const tabs = new TabsService(storage);
  const messenger = new MessengerService(new BrowserMessagingClient(), tabs);

  let showPathBox = true;

  onMount(async () => {
    showPathBox = await storage.get("showPathBox");
  });

  $: saveShowPathBox = async function () {
    storage.set("showPathBox", showPathBox);

    messenger.send(showPathBox ? "load-path-box" : "remove-path-box");
  };

  const autofill = async () => {
    await messenger.send("auto-fill");
  };

  const autofillAndGoToNextPage = async () => {
    await messenger.send("auto-fill", {
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
