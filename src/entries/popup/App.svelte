<script lang="ts">
  import { onMount } from "svelte";
  // import optionsStorage from "~/entries/background/optionsStorage";
  import Button from "~/lib/components/Button.svelte";
  import Switch from "~/lib/components/Switch.svelte";
  import { PathBox } from "~/lib/utils/pathBox";
  import Messenger, { Location } from "~/lib/utils/messenger";

  let showPathBox = true;

  // onMount(async () => {
  //   const savedOptions = await optionsStorage.getAll();
  //   if (savedOptions) {
  //     showPathBox = savedOptions.showPathBox as boolean;
  //   }
  // });

  $: saveShowPathBox = async function () {
    // await PathBox.saveShowPathBox(showPathBox);
    await PathBox.sendMessageFromPopup(showPathBox);
  };

  const autofill = async () => {
    console.log("autofill");
    await Messenger.send(Location.Popup, Location.ContentScript, "auto-fill");
  };
</script>

<main>
  <Switch
    bind:checked={showPathBox}
    label="Show path box"
    onChange={saveShowPathBox}
  />
  <Button label="Autofill page" onClick={autofill} />
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
  }
</style>
