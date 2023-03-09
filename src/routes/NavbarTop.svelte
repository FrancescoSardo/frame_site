<script lang="ts">
import logo from "$lib/assets/logo.svg";
import { goto } from "$app/navigation";
import { page } from "$app/stores";
import { top_navbar_active } from "$lib/stores/navbar";

let active: boolean = $top_navbar_active;
top_navbar_active.subscribe((value) => { active = value; });

let route = $page.route.id || "";
page.subscribe((value) => {
  route = value.route.id || "";
});

let menu_active = false;
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="navbar" class:active>
  <div class="spacer desktop-only" />
  <div class="logo"><img src={logo} /></div>
  <div class="title desktop-only">Frame</div>
  <div class="spacer" />
  <div
    class="specchietti tab-link desktop-only"
    on:click={() => goto("/frame_site/specchietti/panoramica")}
  >
    <div class="text">specchietti</div>
    <div class="underline" />
  </div>
  <div
    class="tamponi tab-link desktop-only"
    class:active={route.includes("tamponi")}
    on:click={() => goto("/frame_site/tamponi/panoramica")}
  >
    <div class="text">tamponi</div>
    <div class="underline" />
  </div>
  <div class="spacer   desktop-only" />
  <div
    class="carrello tab-link desktop-only"
    on:click={() => goto("/frame_site/carrello")}
  >
    carrello
  </div>
  <div
    class="chisiamo tab-link desktop-only"
    on:click={() => goto("/frame_site/chisiamo")}
  >
    chi siamo?
  </div>
  <div class="spacer   desktop-only" />
</div>

<style lang="scss">
  .navbar {
    box-sizing: border-box;

    transition: height 0.1s ease;
    height: 100%;

    display: flex;
    align-items: center;

    gap: 2rem;
    padding: 0 2rem;
    font-size: 1.2rem;

    .spacer {
      flex: 1;
    }

    .tab-link {
      display: flex;
      justify-content: center;
      flex-direction: column;
      cursor: pointer;
      gap: 0.1rem;

      .underline {
        background-color: rgb(50, 50, 50);
        height: 3px;
        width: 0%;

        transition: width 0.5s ease-in-out, background-color 0.5s ease-in-out;
        align-self: center;

        border-radius: 2rem;
      }
    }

    .tab-link.active {
      color: var(--color-var1);
      cursor: default;
      pointer-events: none;
    }

    .tab-link:hover {
      .underline {
        width: 100%;
        background-color: rgb(0, 0, 0);
      }
    }

    .logo {
      height: 5rem;
      width: 5rem;

      img {
        height: 100%;
        width: 100%;
      }
    }
  }
</style>
