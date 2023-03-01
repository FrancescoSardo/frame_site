<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";

  let route = $page.route.id || ''

  page.subscribe((value) => { route = value.route.id || '' })
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="layout">
  <div class="navbar">
    <div class="spacer"></div>
    <div class="title">Swab M-Bike</div>
    <div class="spacer grosso"></div>
    <div class="link panoramica" class:active={route.includes('panoramica')} on:click={() => {goto('/frame_site/tamponi/panoramica')}}>panoramica</div>
    <div class="link confronta"  class:active={route.includes('confronta') } on:click={() => {goto('/frame_site/tamponi/confronta')}}>confronta</div>
    <div class="link acquista"   class:active={route.includes('acquista')  } on:click={() => {goto('/frame_site/tamponi/acquista')}}>acquista</div>
    <div class="spacer"></div>
  </div>
  <div class="content">
    <slot />
  </div>
</div>

<style lang="scss">
  .layout {
    --navbar-height: 3rem;

    display: flex;
    flex-direction: column;
    height: 100%;
    
    .navbar{
      /* border: 5px solid blue; */
      box-sizing: border-box;
      height: var(--navbar-height);
      
      display: flex;
      gap: 3rem;
      align-items: flex-end;

      height: var(--navbar-height);

      border-bottom: 2px solid black;
      box-sizing: border-box;

      align-items: center;

      .panoramica{}
      .panoramica.active{
        color: var(--color-var1);
      }

      .link{
        color: var(--color-var3);
        user-select: none;
        cursor: pointer;
      }

      .spacer {
        flex: 1;
      }

      .spacer.grosso {
        flex: 5;
      }

      .title {
        // margin-right: 45%;
        color: var(--color-var3);
      }

      .acquista {
        background-color: var(--color-var4);      
        padding: 0.2rem 1rem 0.2rem 1rem; 
        border-radius: 2rem;
        color: white;
        box-sizing: border-box;
        user-select: none;
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        &.active {

          background-color: var(--color-var5);     
          color: white;
        }

        &.active:hover{
          background-color: rgba(0, 113, 227, 1); 
          transition: all 0.2s ease-in-out;
        }
        .acquista:hover {
          background-color: red;
          
        }
    }
    }
    
    .content{
      /* border-top: 5px solid black; */
      box-sizing: border-box;

      height: calc(100% - var(--navbar-height));
    }
  }

  @media (max-width: 768px) {
    .layout {
      .navbar{
        display: none;
      }

      .content {
        height: 100%;
      }
    }
  }
</style>
