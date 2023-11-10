<script lang="ts">
  import { onMount } from "svelte";
  import optionsStorage from "~/entries/background/optionsStorage";
  import Switch from "~/lib/components/Switch.svelte";

  let showPathBox = true;

  onMount(async () => {
    const savedOptions = await optionsStorage.getAll();
    if (savedOptions) {
      showPathBox = savedOptions.showPathBox as boolean;
    }
  });

  $: saveShowPathBox = async function () {
    await optionsStorage.set({ showPathBox: showPathBox });
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
