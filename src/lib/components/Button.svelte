<script lang="ts">
  export let label: string;
  export let onClick: () => void;
</script>

<button on:click={onClick}>{label}</button>

<style lang="scss">
  button {
    background-color: #e7004c;
    color: white;
    height: 42px;
    padding: 10px 20px;
    border-radius: 8px;
    text-transform: none;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: bold;
    font-size: 16px;
    border: none;
    cursor: pointer;
  }

  button:hover,
  button:active {
    background-color: #b2003b;
  }
</style>
