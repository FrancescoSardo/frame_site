<script lang="ts">
  import "$lib/styles/global.scss";
  import { onMount } from "svelte";
  import NavbarTop from "./NavbarTop.svelte";
  import NavbarBottom from "./NavbarBottom.svelte";
  import { page } from "$app/stores";
  import { route_store } from "$lib/stores/navbar";

  page.subscribe((value) => { route_store.set(value.route.id || ""); });

  onMount(() => {
    function setVhProperty() {
      let element: HTMLElement | null = document.querySelector(":root");

      if (element) {
        element.style.setProperty("--vh", `${window.innerHeight * 0.01}px`);
      }
    }

    setVhProperty();
    window.addEventListener("resize", setVhProperty);
  });
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="layout">
  <NavbarTop />
  <NavbarBottom />
  <!-- <div
    class="float-acquista mobile-only"
    class:active={route.includes("panoramica")}
  >
    Acquista
  </div> -->
  <div class="content">
    <slot />
  </div>
</div>

<style lang="scss">
  .layout {
    height: calc(var(--vh, 1vh) * 100);

    display: flex;
    flex-direction: column;

    .content {
      height: calc(var(--vh, 1vh) * 100 - var(--navbar-height-total));

      display: flex;
      flex-direction: column;

      border-top: 0.2rem solid;
      box-sizing: border-box;
    }
  }

  @media (max-width: 768px) {
    // .layout {
      

    //   @keyframes glowing {
    //     0% {
    //       box-shadow: 0 0 5px var(--color-var4);
    //     }
    //     50% {
    //       box-shadow: 0 0 20px var(--color-var4);
    //     }
    //     100% {
    //       box-shadow: 0 0 5px var(--color-var4);
    //     }
    //   }

    //   .float-acquista:not(.active) {
    //     display: none;
    //   }

    //   .float-acquista.active {
    //     position: absolute;
    //     bottom: 1rem;
    //     right: 1rem;
    //     width: 9rem;
    //     height: 3rem;

    //     display: flex;
    //     justify-content: center;
    //     align-items: center;

    //     cursor: pointer;
    //     color: white;
    //     font-size: 1.2rem;
    //     font-weight: bold;

    //     border-radius: 10rem;

    //     background-color: var(--color-var4);
    //     animation: glowing 5s infinite ease;
    //   }

    //   .float-acquista.active:hover {
    //     background-color: red;
    //   }
    // }
  }
</style>
