<script lang="ts">
  import type { conftype } from "$lib/data/confronta";


  let selected = 0;
  let active = false;

  export let options: { label: string, value: string }[] = [];
  export let selected_L: conftype;
  export let selected_R: conftype;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="selector">
  <div class="selected noselect" class:active on:click={() => {
    active = !active
  }}>
    <div class="text">{options[selected].label}</div>
    <div class="arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>chevron-down</title><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg></div>
  </div>
  <div class="options" class:active>
    {#each options as option, index}
      <div class="item" on:click={() => {
        selected = index;
        active = false;
        
        if(selected_L != undefined){
          selected_L = option.label 
        }
        if(selected_R != undefined){
          selected_R = option.label 
        }
      }}>{option.label}</div>
      {#if index < options.length - 1}
        <div class="divider" />
      {/if}
    {/each}
  </div>
</div>

<style lang="scss">
  .selector {
    --selector-width: 12rem;
    z-index: 10000;
    width: var(--selector-width);
    height: 4rem;

    background-color: white;
    position: relative;
    cursor: pointer;

    display: flex;
    text-align: center;
    justify-content: center;

    .selected {
      display: grid;
      width: 100%;
      grid-template-columns: 1fr 3rem;
      grid-template-rows: 1fr;
      text-align: center;
      border: 2px solid rgb(184, 184, 184);
      border-radius: 0.5rem;
      
      * {
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
        grid-row: 1;
        
      }

      .text {
        grid-column: 1/3;
      }

      .arrow {
        grid-column: 2;
        width: 100%;
        height: 100%;

        svg {
          width: 2rem;
          height: 2rem;
          transition: transform 0.2s ease;
        }
      }
    }

    .selected.active {
      
      background-color: rgb(240, 240, 240);

      .arrow {
        svg {
          transform: rotate(180deg);
        }
      }
    }

    .options {
      z-index: 10000;
      transition: opacity 0.2s ease;
      opacity: 1;

      display: flex;
      flex-direction: column;

      position: absolute;
      top: 4.5rem;
      left: 0;
      /* background-color: rgb(240, 240, 240); */
      background-color: white;
      border: 2px solid rgb(184, 184, 184);
      box-sizing: border-box;
      width: var(--selector-width);
      border-radius: 0.5rem;
      overflow: hidden;

      .divider {
        width: 100%;
        height: 1px;
        background-color: rgb(184, 184, 184);
      }

      .item {
        z-index: 1000;
        height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        /* background-color: red; */
        background-color: white;
        padding: 0.5rem;
      }

      .item:hover {
        background-color: rgb(240, 240, 240);
      }
    }

    .options:not(.active) {
      opacity: 0;
      // display: none;
    }
  }
  @media (max-width: 768px) {
    .selector {
      --selector-width: 8rem;

      * {
        font-size: 0.8rem;
      }

      .selected {
        grid-template-columns: 1fr 2rem;

        .text {
          grid-column: 1;
        }
      }
    }
  }
</style>
