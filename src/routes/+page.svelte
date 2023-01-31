<script lang="ts">
  import {
    active_page,
    setActivePage,
  } from "$lib/stores/active_page";
  import { onMount } from "svelte";

  let page = 0;

  let page1: HTMLElement;
  let page2: HTMLElement;
  let page3: HTMLElement;
  let page4: HTMLElement;
  
  let content1: HTMLElement;
  let content2: HTMLElement;
  let content3: HTMLElement;
  let content4: HTMLElement;

  onMount(() => {
    active_page.subscribe((value) => {
      page = value;

      if (page == 0) {
        content1.scrollIntoView({ behavior: "smooth" });
      } else if (page == 1) {
        content2.scrollIntoView({ behavior: "smooth" });
      } else if (page == 2) {
        content3.scrollIntoView({ behavior: "smooth" });
      } else if (page == 3) {
        content4.scrollIntoView({ behavior: "smooth" });
      }
    });

    let observer = new IntersectionObserver(
      function (entries) {
        // isIntersecting is true when element and viewport are overlapping
        // isIntersecting is false when element and viewport don't overlap

        for(let i = 0; i < entries.length; i++) {
          if(entries[i].isIntersecting) {
            let value = entries[i].target.id.charAt(1);
            setActivePage(Number.parseInt(value));
          }
        }
          
      },
      { threshold: [0.5] }
    );

    observer.observe(page1);
    observer.observe(page2);
    observer.observe(page3);
    observer.observe(page4);
  });
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="product">
  <div class="content-container">
    <div bind:this={content1} class="content1" />
    <div bind:this={content2} class="content2" />
    <div bind:this={content3} class="content3" />
    <div bind:this={content4} class="content4" />
  </div>
  <div class="left-navbar">
    <div
      class={page == 0 ? "circle active" : "circle"}
      on:click={() => {
        setActivePage(0);
        page1.scrollIntoView();
      }}
    />
    <div
      class={page == 1 ? "circle active" : "circle"}
      on:click={() => {
        setActivePage(1);
        page2.scrollIntoView();
      }}
    />
    <div
      class={page == 2 ? "circle active" : "circle"}
      on:click={() => {
        setActivePage(2);
        page3.scrollIntoView();
      }}
    />
    <div
      class={page == 3 ? "shop   active" : "shop"}
      on:click={() => {
        setActivePage(3);
        page4.scrollIntoView();
      }}
    >
      <img
        src="	https://cdn.iconscout.com/icon/free/png-512/shopping-cart-1779478-1513173.png?w=256&f=avif"
        alt=""
      />
    </div>
    <!--   -->
  </div>
  <div class="scroll-container">
    <div bind:this={page1} class="snap" id="p0" />
    <div bind:this={page2} class="snap" id="p1" />
    <div bind:this={page3} class="snap" id="p2" />
    <div bind:this={page4} class="snap" id="p3" />
  </div>
</div>

<style lang="scss">
  .product {
    height: 100%;
    width: 100%;

    display: grid;
    grid-template-columns: 5rem 1fr;
    grid-template-rows: 1fr;
    
    .content-container{
      grid-column: 1 / 3;
      grid-row: 1;

      overflow-y: hidden;
      
      .content1{
        height: 100%;
        width: 100%;
        background-color: yellow;
      }

      .content2{
        height: 100%;
        width: 100%;
        background-color: wheat;
      }

      .content3{
        height: 100%;
        width: 100%;
        background-color: aqua;
      }

      .content4{
        height: 100%;
        width: 100%;
        background-color: purple;
      }
    }

    .left-navbar {
      grid-column: 1;
      grid-row: 1;

      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;

      .circle {
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        border: solid 5px black;
        cursor: pointer;
      }

      .circle.active {
        background-color: black;
      }

      .circle:hover {
        transition: all 0.5s ease;
        background-color: black;
      }

      .shop {
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        border: solid 5px black;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 1.5rem;
          height: 1.5rem;
        }

        &:hover {
          transition: all 0.5s ease;
          background-color: black;
        }
      }

      .shop.active {
        background-color: black;

        img {
          filter: invert(1);
        }
      }
    }

    .scroll-container {
      grid-column: 1 / 3;
      grid-row: 1;

      height: 100%;

      overflow-y: scroll;

      .snap {
        height: 100%;
        // border: solid 5px black;
        box-sizing: border-box;
      }
    }
  }
</style>
