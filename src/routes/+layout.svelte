<script lang="ts">
  import "$lib/styles/global.scss";
  import { onMount } from "svelte";
  import NavbarTop from "./NavbarTop.svelte";
  import NavbarBottom from "./NavbarBottom.svelte";
  import { page } from "$app/stores";
  import {
    bottom_navbar_active,
    route_store,
    top_navbar_active,
  } from "$lib/stores/navbar";
  import NavbarMobile from "./NavbarMobile.svelte";

  page.subscribe((value) => {
    route_store.set(value.route.id || "");
  });

  let bottom_active = $bottom_navbar_active;
  bottom_navbar_active.subscribe((value) => {
    bottom_active = value;
  });

  let top_active = $top_navbar_active;
  top_navbar_active.subscribe((value) => {
    top_active = value;
  });

  onMount(() => {
    let root: HTMLElement = document.querySelector(":root")!;

    function setVhProperty() {
      root.style.setProperty("--vh", `${window.innerHeight * 0.01}px`);
    }

    top_navbar_active.subscribe((value) => {
      root.style.setProperty("--h1", `${value ? "4rem" : "0rem"}`);
    });

    bottom_navbar_active.subscribe((value) => {
      root.style.setProperty("--h2", `${value ? "3rem" : "0rem"}`);
    });

    setVhProperty();
    window.addEventListener("resize", setVhProperty);
  });
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="layout">
  <div class="navbar-desktop">
    <div class="top-nav">
      <NavbarTop />
    </div>
    <div class="bottom-nav">
      <NavbarBottom />
    </div>
  </div>
  <div class="navbar-mobile">
    <NavbarMobile />
  </div>
  <div class="content">
    <slot />
  </div>
</div>

<style lang="scss">
  .layout {
    height: calc(var(--vh, 1vh) * 100);

    display: flex;
    flex-direction: column;

    .navbar-mobile {
      display: none;
    }

    .navbar-desktop {
      --translateY: calc(var(--h1) - var(--navbar-height-1));

      height: var(--navbar-height-total);
      transition: height 0.5s ease-in-out;
      overflow: hidden;
    }

    .top-nav {
      height: var(--navbar-height-1);
      transform: translateY(var(--translateY));
      transition: transform 0.5s ease-in-out;
    }

    .bottom-nav {
      height: var(--navbar-height-2);
      transform: translateY(var(--translateY));
      transition: transform 0.5s ease-in-out;
    }

    .content {
      height: calc(var(--vh, 1vh) * 100 - var(--navbar-height-total));
      transition: height 0.5s ease-in-out;

      display: flex;
      flex-direction: column;

      border-top: 0.2rem solid;
      box-sizing: border-box;
    }
  }

  @media (max-width: 768px) {
    .layout {
      .navbar-desktop {
        display: none;
      }
      .navbar-mobile {
        display: block;
        height: var(--navbar-height-mobile);
      }

      .content {
        height: calc(var(--vh, 1vh) * 100 - var(--navbar-height-mobile));
      }
    }
  }
</style>
