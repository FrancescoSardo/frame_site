<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import { bottom_navbar_active } from "$lib/stores/navbar";
  import { onMount } from "svelte";

  let active: boolean = $bottom_navbar_active;
  bottom_navbar_active.subscribe((value) => { active = value; });

  let route = $page.route.id || "";
  page.subscribe((value) => {
    route = value.route.id || "";
  });
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<nav class="navbar">
  <div class="spacer-1" />
  <div class="title">Swab M-Bike</div>
  <div class="spacer-5" />
  <div
    class="tab-link panoramica"
    on:click={() => {
      goto("/frame_site/tamponi/panoramica");
    }}
  >
    panoramica
  </div>
  <div
    class="tab-link confronta"
    class:active={route.includes("confronta")}
    on:click={() => {
      goto("/frame_site/tamponi/confronta");
    }}
  >
    confronta
  </div>
  <div
    class="tab-link acquista"
    class:active={route.includes("acquista")}
    on:click={() => {
      goto("/frame_site/tamponi/acquista");
    }}
  >
    acquista
  </div>
  <div class="spacer-1" />
</nav>

<style lang="scss">
  // .navbar:not(.active) {
  //   display: none;
  // }

  .navbar {
    box-sizing: border-box;
    height: 100%;

    display: flex;
    gap: 3rem;
    align-items: flex-end;

    height: var(--navbar-height-2);

    border-bottom: 2px solid black;
    box-sizing: border-box;

    align-items: center;

    .tab-link.active {
      color: var(--color-var1);
      pointer-events: none;
    }

    .tab-link {
      color: var(--color-var3);
      user-select: none;
      cursor: pointer;
    }

    .acquista {
      padding: 0.2rem 1rem 0.2rem 1rem;
      border-radius: 2rem;
      box-sizing: border-box;
      user-select: none;
      transition: all 0.2s ease-in-out;
      cursor: pointer;

      background-color: white;
      color: #0085ff;
      border: 2px solid #0085ff;

      &.active {
        background-color: #0085ff;
        color: white;
      }

      &:hover {
        background-color: #0085ff;
        color: white;
      }
    }
  }
</style>
