<script lang="ts">
  export let checked = false;
  export let label: string;
  export let onChange: () => void;
</script>

<div>
  <label class="switch">
    <input type="checkbox" bind:checked on:change={onChange} />
    <span class="slider" />
  </label>
  <p>
    {label}
  </p>
</div>

<style>
  p {
    color: #3b3b3b;
    font-size: 16px;
    font-family: "Roboto", "Helvetica", "Arial", "sans-serif";
  }

  div {
    display: flex;
    font-size: 16px;
    align-items: center;
  }

  .switch {
    position: relative;
    display: inline-block;
    width: 50px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #bababa;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;
    width: 34px;
    height: 14px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: -4px;
    bottom: -2px;
    background-color: #6e6e6e;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + .slider {
    background-color: #ff80a9;
  }

  input:checked + .slider {
    box-shadow: 0 0 1px #ff80a9;
  }

  input:checked + .slider:before {
    background-color: #e7004c;
    -webkit-transform: translateX(20px);
    -ms-transform: translateX(22px);
    transform: translateX(22px);
  }
</style>
