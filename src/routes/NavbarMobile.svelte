<script lang="ts">
  import logo from "$lib/assets/logo.svg";
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";

  let route = $page.route.id || "";
  page.subscribe((value) => {
    route = value.route.id || "";
  });

  let menu_active = false;

  function navigate_to(path: string) {
    goto(path);

    menu_active = false;
  }
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="navbar">
  <div class="spacer-1" />
  <div class="logo"><img src={logo} /></div>
  <div class="spacer-3" />
  <div class="spacer-3" />
  <div
    class="hamburger"
    class:active={menu_active}
    on:click={() => {
      menu_active = !menu_active;
    }}
  >
    <span class="line1" />
    <span class="line2" />
    <span class="line3" />
  </div>
  <div class="spacer-1" />

  <div class="menu" class:active={menu_active}>
    <div class="left half-menu">
      <div
        class="mob-link"
        class:active={route.includes("specchietti")}
        on:click={() => navigate_to("/frame_site/specchietti/panoramica")}
      >
        Specchietti
      </div>
      <div
        class="mob-link"
        class:active={route.includes("tamponi")}
        on:click={() => navigate_to("/frame_site/tamponi/panoramica")}
      >
        Tamponi
      </div>
    </div>
    <div class="right half-menu">
      <div
        class="mob-link "
        class:active={route.includes("confronta")}
        on:click={() => navigate_to("/frame_site/tamponi/confronta")}
      >
        Confronta
      </div>
      <div
        class="mob-link "
        class:active={route.includes("panoramica")}
        on:click={() => navigate_to("/frame_site/tamponi/panoramica")}
      >
        Panoramica
      </div>
      <div
        class="mob-link "
        class:active={route.includes("chisiamo")}
        on:click={() => navigate_to("/frame_site/chisiamo")}
      >
        Chi siamo?
      </div>
      <div
        class="mob-link "
        class:active={route.includes("carrello")}
        on:click={() => navigate_to("/frame_site/carrello")}
      >
        Carrello
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .navbar {
    z-index: 1000;
    
    box-sizing: border-box;
    height: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;

    
    .logo {
      width: 3rem;
      height: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 100%;
        height: 100%;
      }
    }
    
    .hamburger {
      width: 32px;
      height: 32px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      cursor: pointer;
      box-sizing: border-box;

      span {
        width: 100%;
        height: 5px;
        background-color: black;
        border-radius: 2rem;

        transition: all 1s ease;
      }

      &.active {
        span {
          &:nth-child(1) {
            transform: rotate(45deg) translate(10px, 10px);
          }
          &:nth-child(2) {
            opacity: 0;
          }
          &:nth-child(3) {
            transform: rotate(-45deg) translate(9px, -9px);
          }
        }
      }
    }
  }

  .menu {
    z-index: 1000;
    
    position: absolute;
    top: var(--navbar-height-1);
    height: 0rem;
    width: 100%;
    overflow: hidden;
    background: white;
    transition: height 1s ease;
    border-bottom: 3px solid black;

    display: flex;

    .half-menu {
      width: 50%;
      position: relative;

      display: flex;
      flex-direction: column;
      padding: 1rem;

      gap: 0.5rem;
    }

    .right {
      left: 50%;
      transition: left 1s ease;
      align-items: flex-end;
    }

    .left {
      right: 50%;
      transition: right 1s ease;
      align-items: flex-start;
    }

    .mob-link {
      cursor: pointer;
      text-decoration: underline;
    }

    .mob-link.active {
      color: var(--color-var1);
      cursor: default;
    }
  }

  .menu.active {
    height: 9rem;

    .right {
      left: 0;
    }
    .left {
      right: 0;
    }
  }
</style>
