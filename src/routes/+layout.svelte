<div class="app">
  <div class="background">
    <div class="left" style={`flex: ${leftWidth}`} />
    <div class="right" style={`flex: ${100 - leftWidth}`} />
  </div>

  <div class="navbar">
    <div class="searchbar">
      <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/></svg>
      <input type="text" class="input" />
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
  import { background_split } from '$lib/stores/bg_store';
  import '../styles/global.scss'

  let leftWidth = 70;

  background_split.subscribe((amount) => {
    leftWidth = amount;
  })
</script>

<style lang="scss" >
  .app {
    position: fixed;

    display: grid;

    height: 100vh;
    width: 100vw;

    // flex-direction: column;
    grid-template-rows: var(--navbar-height) 1fr;
  }

  .background {
    position: absolute;

    z-index: -1;

    display: flex;

    height: 100vh;
    width: 100vw;
    
    .left {
      background-color: var(--color-2);
      transition: flex 1s ease-in-out;
    }

    .right {
      background-color: var(--color-1);
      transition: flex 1s ease-in-out;
    }
  }

  .content {
    grid-row: 2;
  }

  .navbar {
    grid-row: 1;
    width: 100vw;

    box-sizing: border-box;

    display: flex;

    * {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      box-sizing: border-box;
    }

    .searchbar {
      width: 15rem;

      display: flex;

      gap: 0.5rem;

      padding-left: 1rem;
      box-sizing: border-box;

      .icon {
        min-width: 1.5rem;
        height: 1.5rem;
      }

      .input {
        flex: 1;
        height: 2rem;

        box-sizing: border-box;

        border: 0;

        border-radius: 1rem;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
      }

      .input:active, .input:focus {
        outline: none;

        border: solid 2px black;
      }
      
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

      margin-right: 2rem;
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