<script lang="ts">
  import {
    active_page,
    setActivePage,
  } from "$lib/stores/active_page";
  import { onMount } from "svelte";

  let page = 0;
  const pages = 4;
  
  let snap_elements: { [key: number]: HTMLElement } = {};
  let content_elements: { [key: number]: HTMLElement } = {};

  onMount(() => {
    for(let i = 0; i < pages; i++) {
      let element: HTMLElement | null = document.querySelector(`.content${i + 1}`);
      if(element) { content_elements[i] = element;  }
    }

    for(let i = 0; i < pages; i++) {
      let element: HTMLElement | null = document.querySelector(`#snap${i}`);
      if(element) { snap_elements[i] = element;  }
    }
    
    active_page.subscribe((value) => {
      page = value;
      
      content_elements[page]?.scrollIntoView({ behavior: "smooth"});
    });

    let observer = new IntersectionObserver(
      function (entries) {
        for(let i = 0; i < entries.length; i++) {
          if(entries[i].isIntersecting) {
            let value = entries[i].target.id.charAt(4);
            setActivePage(Number.parseInt(value));
          }
        }
          
      },
      { threshold: [0.5] }
    );
    
    for(let snap_element of Object.values(snap_elements)) {
      observer.observe(snap_element);
    }
  });
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="product">
  <div class="content-container">
    <div class="content1" />
    <div class="content2" />
    <div class="content3" />
    <div class="content4" />
  </div>
  <div class="scroll-container">
    <div class="snap" id="snap0" />
    <div class="snap" id="snap1" />
    <div class="snap" id="snap2" />
    <div class="snap" id="snap3" />
  </div>
  <div class="left-navbar">
    <div
      class={page == 0 ? "nav-btn circle active" : "nav-btn circle"}
      on:click={() => {
        setActivePage(0);
        content_elements[0]?.scrollIntoView({ behavior: "smooth"});
      }}
    />
    <div
      class={page == 1 ? "nav-btn circle active" : "nav-btn circle"}
      on:click={() => {
        setActivePage(1);
        content_elements[1]?.scrollIntoView({ behavior: "smooth"});
      }}
    />
    <div
      class={page == 2 ? "nav-btn circle active" : "nav-btn circle"}
      on:click={() => {
        setActivePage(2);
        content_elements[2]?.scrollIntoView({ behavior: "smooth"});
      }}
    />
    <div
      class={page == 3 ? "nav-btn shop   active" : "nav-btn shop"}
      on:click={() => {
        setActivePage(3);
        content_elements[3]?.scrollIntoView({ behavior: "smooth"});
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
    </div>
    <!--   -->
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

      .nav-btn {
        width: 1rem;
        height: 1rem;
        border-radius: 0.5rem;
        cursor: pointer;
        box-sizing: border-box;

        transition: background 0.5s ease, width 0.5s ease, height 0.5s ease;
      }

      .circle {
        border: solid 3px black;
      }

      .circle.active {
        background-color: white;
        width: 2rem;
      }

      .circle:not(.active):hover {
        transition: all 0.5s ease;
        background-color: rgba(0, 0, 0, 0.5);
      }

      .shop {
        width: 1.8rem;
        height: 1.8rem;
        display: flex;
        justify-content: center;
        align-items: center;

        padding: 0.2rem;

        box-sizing: border-box;

        border: solid 3px transparent;

        svg {
          width: 100%;
          width: 100%;
        }
      }

      .shop:not(.active):hover {
        background-color: rgba(0, 0, 0, 0.2);
      }

      .shop.active {
        background-color: white;
        border: solid 3px black;
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
