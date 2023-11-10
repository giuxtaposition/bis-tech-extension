<script lang="ts">
  import { onMount } from "svelte";
  import optionsStorage from "~/entries/background/optionsStorage";

  const currentPath = window.location.pathname.split("/")[1];

  let showPathBox: boolean;

  onMount(async () => {
    const savedOptions = await optionsStorage.getAll();
    if (savedOptions) {
      showPathBox = savedOptions.showPathBox as boolean;
    }
  });
</script>

{#if currentPath && showPathBox}
  <div id="path-box" class={currentPath}>
    {currentPath}
  </div>
{/if}

<style>
  #path-box {
    margin: 0 20px;
    padding: 12px;
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 8px;
  }
  .vita {
    color: rgb(185 28 28);
    background: rgb(252 165 165);
  }
  .caso-morte {
    color: rgb(21 128 61);
    background: rgb(134 239 172);
  }
  .infortuni {
    color: rgb(29 78 216);
    background: rgb(147 197 253);
  }
</style>
