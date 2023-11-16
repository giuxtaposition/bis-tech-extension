<script lang="ts">
  import { onMount } from "svelte";
  import optionsStorage from "~/entries/background/optionsStorage";
  import Switch from "~/lib/components/Switch.svelte";
  import { PathBox } from "~/lib/utils/pathBox";

  let showPathBox = true;

  onMount(async () => {
    const savedOptions = await optionsStorage.getAll();
    if (savedOptions) {
      showPathBox = savedOptions.showPathBox as boolean;
    }
  });

  $: saveShowPathBox = async function () {
    await PathBox.saveShowPathBox(showPathBox);
    await PathBox.sendMessageFromPopup(showPathBox);
  };
</script>

<main>
  <Switch
    bind:checked={showPathBox}
    label="Show path box"
    onChange={saveShowPathBox}
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
  }
</style>
