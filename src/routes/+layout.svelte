<div class="app">
  <div class="background">
    <div class="left" style={`flex: ${leftWidth}`} />
    <div class="right" style={`flex: ${100 - leftWidth}`} />
  </div>

  <div class="navbar">
    <div class="searchbar">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"> <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/> </svg>
    </div>
    <div class="title">FRAME</div>
    <div class="chi-siamo">chi siamo</div>
    <div class="products">prodotti</div>
    <div class="help">help</div>
  </div>
  <div class="content">
    <slot />
  </div>
</div>

<script lang="ts">
  import { onMount } from 'svelte';
  import '../styles/global.scss'
  import { scroll_offset } from '../lib/stores/scroll_store';
  
  let leftWidth = 70;

  scroll_offset.subscribe((offset) => {
    
  })
</script>

<style lang="scss" >
  .app {
    position: fixed;

    display: grid;

    height: 100vh;
    width: 100vw;

    // flex-direction: column;
    grid-template-rows: 6rem 1fr;
  }

  .background {
    position: absolute;

    z-index: -1;

    display: flex;

    height: 100vh;
    width: 100vw;
    
    .left {
      background-color: var(--color-2);
    }

    .right {
      background-color: var(--color-1);
    }
  }

  .content {
    grid-row: 2;
    // display: flex;

    // overflow-y: scroll;
  }

  .navbar {
    grid-row: 1;
    width: 100vw;

    display: flex;

    gap: 2rem;

    * {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      box-sizing: border-box;
    }

    .searchbar {
      width: 4rem;
      // background-color: rgba(255, 0, 0, 0.303);
    }

    .title {
      flex: 1;
      // background-color: blue;
    }

    .chi-siamo {
      flex: 3;
      // width: 5rem;
      // background-color: yellow;
      justify-content: flex-end;
    }

    .products {
      flex: 2;
      width: 5rem;
      // background-color: green;
      justify-content: flex-start;
    }

    .help {
      flex: 1;
      // background-color: purple;
    }
  }
  
</style>