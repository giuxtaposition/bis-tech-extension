<script lang="ts">
  import type { Product } from "~/types";

  export let currentPath: Product;
</script>

{#if currentPath}
  <div id="path-box" class={currentPath}>
    {currentPath}
  </div>
{/if}

<style lang="scss">
  #path-box {
    margin: 0 20px;
    padding: 16px 12px 16px 16px;
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    position: fixed;
    top: 20%;
    left: -25px;
    border-radius: 0 25px 25px 0;
    border: 2px solid;
    min-width: 60px;
  }
  .vita {
    background: rgba(210, 82, 127, 0.1);
    border-color: #d2527f;
    color: #d2527f;
  }
  .caso-morte {
    background: rgba(39, 174, 96, 0.1);
    border-color: #27ae60;
    color: #27ae60;
  }
  .infortuni {
    background: rgba(34, 167, 240, 0.1);
    border-color: #22a7f0;
    color: #22a7f0;
  }
</style>
