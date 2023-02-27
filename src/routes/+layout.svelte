<script lang="ts">
  import "$lib/styles/global.scss";
  import { onMount } from "svelte";
  import logo from "$lib/assets/logo.svg";

  let menu_active = false;

  onMount(() => {
    function setVhProperty() {
      let element: HTMLElement | null = document.querySelector(":root");

      if (element) {
        element.style.setProperty("--vh", `${window.innerHeight * 0.01}px`);

        console.log("setVhProperty");
      }
    }
    
    setVhProperty();
    window.addEventListener('resize', setVhProperty)
  });
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="layout">
  <div class="navbar" >
    <div class="spacer desktop-only" />
    <div class="logo"><img src={logo} /></div>
    <div class="title desktop-only">Frame</div>
    <div class="spacer" />
    <div class="specchietti link desktop-only">
      <div class="text">specchietti</div>
      <div class="underline"></div>
    </div>
    <div class="tamponi link desktop-only">
      <div class="text">tamponi</div>
      <div class="underline"></div>
    </div>
    <div class="spacer desktop-only" />
    <div class="carrello desktop-only">carrello</div>
    <div class="chisiamo desktop-only">chi siamo?</div>
    <div class="spacer desktop-only" />
    
    <div class="hamburger" class:active={menu_active} on:click={() => { menu_active = !menu_active }}>
      <span class='line1'></span>
      <span class='line2'></span>
      <span class='line3'></span>
    </div>
    
  </div>
  <div class="menu mobile-only" class:active={menu_active}>
    <div class="left">
      <div class="specchietti link mobile-only">Specchietti</div>
    </div>
    <div class="right">
      <div class="specchietti link mobile-only">Specchietti</div>
      <div class="tamponi     link mobile-only">Tamponi</div>
      <div class="carrello         mobile-only">Carrello</div>
      <div class="chisiamo         mobile-only">Chi siamo</div>
    </div>
  </div>
  <div class="content">
    <slot />
  </div>
</div>

<style lang="scss">
.layout {
  --navbar-height: 4rem;
  height: calc(var(--vh, 1vh) * 100);

  display: flex;
  flex-direction: column;

  .navbar {
    /* border: 5px solid red; */
    box-sizing: border-box;

    height: var(--navbar-height);
    display: flex;
    align-items: center;

    gap: 2rem;
    padding: 0 2rem;

    font-size: 1.2rem;
    // font-weight: bold;
    
    .mobile-only {
      display: none;
    }

    .spacer {
      flex: 1;
    } 

    .link {
      display: flex;
      justify-content: center;
      flex-direction: column;
      cursor: pointer;
      gap: 0.1rem;

      .text {
      }

      .underline {
        background-color: rgb(50, 50, 50);
        height: 3px;
        width: 0%;

        transition: width 0.5s ease-in-out, background-color 0.5s ease-in-out;
        align-self: center;

        border-radius: 2rem;
      }
    }

    .link:hover {
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

    .title {

    }
    
    .carrello {

    }

    .chisiamo {

    }

    .specchietti {

    }

    .tamponi {

    }
    
    .hamburger{
      display: none;
    }
    
  }

  .menu {
    display: none;
  }

  .content {
    /* border: 5px solid green; */
    // background-color: rgba(0, 255, 0, 0.5);
    box-sizing: border-box;

    height: calc(var(--vh, 1vh) * 100 - var(--navbar-height));
  }
}

@media (max-width: 768px) {
.layout {
  --navbar-height: 4rem;

  .navbar {
    mobile-only {
      display: flex;
    }

    .desktop-only {
      display: none;
    }
    
    .hamburger{
        width: 32px;
        height: 32px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        cursor: pointer;

        span {
          width: 100%;
          height: 5px;
          background-color:  black;
          border-radius: 2rem;
          
          transition: all 1s ease;
        }

        &.active {
          span {
            &:nth-child(1){
              transform: rotate(45deg) translate(10px, 10px);
            }
            &:nth-child(2){
              opacity: 0;
            }
            &:nth-child(3){
              transform: rotate(-45deg) translate(9px, -9px);
            }
          }
        }
    }
  }

  .menu {
    position: absolute;
    top: var(--navbar-height);
    height: 0rem;
    width: 100%;
    overflow: hidden;
    background: white;
    transition: all 1s ease;
    border-bottom: 2px solid black;

    display: flex;

    .left {
      width: 50%
    }

    .right {
      position: relative;
      left: 50%;

      width: 50%;
      display: flex;
      flex-direction: column;
      padding: 1rem;
      align-items: flex-end;

      transition: left 1s ease;
    }

    .left{
      position: relative;
      right: 50%;
      width: 50%;

      display: flex;
      flex-direction: column;
      padding: 1rem;
      align-items: flex-start;
      transition: right 1s ease;
    }
  }
  
  .menu.active {
    height: 7rem;

    .right {
      left: 0;
    }
    .left{
      right: 0;
    }
  }
}}
</style>
