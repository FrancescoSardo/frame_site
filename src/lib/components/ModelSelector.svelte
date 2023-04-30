<script lang="ts">
  import type { item } from "$lib/data/selezione-modello";

  let active = false;

  export let text: string;
  export let value: string = ""
  export let options: string[];
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="selector-box">
  <div
    class="selected"
    class:active
    on:click={() => {
      active = !active;
    }}
  >
    <div class="text">
      {text}: {value}
    </div>
    <div class="arrow">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
        ><title>chevron-down</title><path
          d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
        /></svg
      >
    </div>
  </div>
  <div class="options" class:active>
    {#each options as option, index}
      <div class="item" on:click={() => {
        value = option
        active = false
      }}>
        {option}
      </div>
      {#if index < options.length - 1}
        <div class="divider" />
      {/if}
    {/each}
  </div>
</div>

<style lang="scss">
  .selector-box {
    --selector-width: 100%;
    width: var(--selector-width);
    height: 4rem;
    /* background-color: white; */
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .selected {
      border: 2px solid rgb(191, 191, 191);
      border-radius: 0.6rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      padding: 2%;
      .text {
        color: grey;
        font-size: large;
      }
      .arrow {
        /*  width: 100%;
        height: 100%; */
        display: flex;
        align-self: center;
        justify-content: center;
        align-items: center;
        svg {
          width: 2rem;
          height: 2rem;
          transform: rotate(180deg);
          transition: transform 0.2s ease;
        }
      }
    }
    .selected.active {
      /* z-index: -1; */
      /* background-color: rgb(240, 240, 240); */

      .arrow {
        svg {
          transform: rotate(0deg);
        }
      }
    }

    .options {
      border: 2px solid rgb(191, 191, 191);
      border-radius: 0.6rem;
      background-color: white;
      display: flex;
      gap: 1rem;
      padding: 2%;

      transition: opacity 0.2s ease;
      /* opacity: 1; */
      position: relative;
      z-index: 9999;
      display: flex;
      flex-direction: column;

      .divider {
        width: 100%;
        height: 1px;
        background-color: rgb(184, 184, 184);
      }

      .item {
        /* s */
        height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        /* background-color: red; */
        /* background-color: white; */
        padding: 0.5rem;
      }
    }
    .options:not(.active) {
      z-index: -1;
      opacity: 0;
      // display: none;
    }
  }
</style>
