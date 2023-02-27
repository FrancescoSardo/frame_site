<script lang="ts">
  import { page } from "$app/stores";

  let route = $page.route.id || ''
</script>

<div class="layout">
  <div class="navbar">
    <div class="spacer"></div>
    <div class="title">Swab M-Bike</div>
    <div class="link panoramica" class:active={route.includes('panoramica')}>panoramica</div>
    <div class="link confronta"  class:active={route.includes('confronta') }>confronta</div>
    <div class="link acquista"   class:active={route.includes('acquista')  }>acquista</div>
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

      .spacer {
        flex: 1;
      }

      .title {
        margin-right: 45%;
      }

      .acquista {
        background-color: rgba(0, 113, 227, 1);      
        padding: 0.2rem 1rem 0.2rem 1rem; 
        border-radius: 2rem;
        color: white;
        box-sizing: border-box;
        transition: all 0.2s ease-in-out;

        &.active {
          background-color: rgba(0, 113, 227, 0.4);  
          cursor: pointer;
          color: white;
        }

        &.active:hover{
          background-color: rgba(0, 113, 227, 1); 
          transition: all 0.2s ease-in-out;
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
