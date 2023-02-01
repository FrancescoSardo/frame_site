<script lang="ts">
  import {
    active_page,
    setActivePage,
  } from "$lib/stores/active_page";
    import { setBackgroundSplit } from "$lib/stores/bg_store";
  import { onMount } from "svelte";

  let page = 0;
  let pages = 0;

  let canvas_container: HTMLElement;

  const product_page_data: {
    bg_split: number;
    canvas_position: { x: number; y: number; };
  }[] = [{
    bg_split: 70,
    canvas_position: { x: 0.8, y: 0.3 }
  }, {
    bg_split: 30,
    canvas_position: { x: 0.3, y: 0.4 }
  }, {
    bg_split: 50,
    canvas_position: { x: 0.3, y: 0.8 }
  }]

  onMount(() => {
    active_page.subscribe((value) => {
      page = value;

      setBackgroundSplit(product_page_data[page].bg_split);

      canvas_container.style.setProperty("--x-position", product_page_data[page].canvas_position.x.toString());
      canvas_container.style.setProperty("--y-position", product_page_data[page].canvas_position.y.toString());
    });

    let elements = document.querySelectorAll(".product-page");
    pages = elements.length;

    let observer = new IntersectionObserver(
      (entries) => {
        for(let entry of entries) {
          if(entry.isIntersecting) {
            let value = entry.target.id.charAt(4);
            setActivePage(Number.parseInt(value));
          }
        }
      },
      { threshold: [0.5] }
    );
    
    for(let element of elements) {
      observer.observe(element);
    }
  });
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="product">
  <div class="content-container">
    {#each Array(product_page_data.length).fill(0) as _, i}
      <div class={`product-page c${i}`} id={`page${i}`} />
    {/each}
  </div>
  <div bind:this={canvas_container} class="canvas-container">
    <div class="canvas-point" />
  </div>
</div>

<style lang="scss">
  .product {
    height: 100%;
    width: 100%;

    display: grid;
    grid-template-columns: 5rem 1fr;
    grid-template-rows: 1fr;

    .canvas-container {
      --x-position: 0.5;
      --y-position: 0.5;

      pointer-events: none;
      position: absolute;
      top: var(--navbar-height);
      left: 0;

      height: calc(100vh - var(--navbar-height));
      width: 100vw;

      box-sizing: border-box;

      padding-left: calc(100vw * var(--x-position));
      padding-top:  calc((100vh - var(--navbar-height)) * var(--y-position));

      transition: padding-left 1s ease-in-out, padding-top 1s ease;

      .canvas-point {
        width: 1rem;
        height: 1rem;

        background-color: red;
        border-radius: 50%;
      }
    }
  
    .content-container {
      grid-column: 1 / 3;
      grid-row: 1;

      overflow-y: scroll;

      scroll-behavior: smooth;
      scroll-snap-type: y mandatory;
      

      .product-page {
        height: 100%;
        width: 100%;

        transition: opacity 1s;
        
        scroll-snap-align: start;

        &.c0 {
          // background-color: red;
        }

        &.c1 {
          // background-color: blue;
        }

        &.c2 {
          // background-color: green;
        }

        &.c3 {
          // background-color: yellow;
        }

        &.c4 {
          // background-color: purple;
        }

        &.c5 {
          // background-color: orange;
        }

        &.c6 {
          // background-color: black;
        }
      }
    }
  }
</style>
