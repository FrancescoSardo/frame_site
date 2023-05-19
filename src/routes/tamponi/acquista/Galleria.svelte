<script lang="ts">
  import  Long1  from "$lib/assets/img/Long/Long_frontale_NO_SFONDO.png";
  import  Long2  from "$lib/assets/img/Long/Long_laterale_NO_SFONDO.png";
  import  Long3  from "$lib/assets/img/Long/Long_tre_quarti_NO_SFONDO.png";
  import  Plane1  from "$lib/assets/img/Plane/Plane_frontale_NO_SFONDO.png";
  import  Plane2  from "$lib/assets/img/Plane/Plane_laterale_NO_SFONDO.png";
  import  Plane3  from "$lib/assets/img/Plane/Plane_tre_quarti_NO_SFONDO.png";

  import  Shark1  from "$lib/assets/img/Shark/Shark_frontale_NO_SFONDO.png";
  import  Shark2  from "$lib/assets/img/Shark/Shark_laterale_NO_SFONDO.png";
  import  Shark3  from "$lib/assets/img/Shark/Shark_tre_quarti_NO_SFONDO.png";



  let gallery_index = 0;
  export let modello_appendice = "";
  export let gallery_active = false;
  export let close_gallery: () => void
  let gallery_images: string | any[];

  $:{
  
    switch(modello_appendice) {
    case "Plane":
    gallery_images = [
      Plane1,
      Plane2,
      Plane3,
    ];
      break;
    case "Long":
      gallery_images = [
      Long1,
      Long2,
      Long3,
    ];
      break;
    case "Squalo":
      gallery_images = [
      Shark1,
      Shark2,
      Shark3,
      ];
      break;

    default:
      gallery_images = [
      
      ];
  }
  }

</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-missing-attribute -->
<div class="galleria-container" class:active={gallery_active}>
  <div class="img-list">
    {#each gallery_images as image, i}
      <div style="translate: -{gallery_index * 100}vw" class="img-container">
        <img src={image} />
      </div>
    {/each}
  </div>
  <div class="button-container">
    <div
      class="close"
      on:click={close_gallery}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
        ><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
          d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"
        /></svg
      >
    </div>
    <div class="arrows">
      <div
        class="arrow left"
        on:click={() => {
          if (gallery_index > 0) {
            gallery_index -= 1;
          }
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
          ><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
            d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
          /></svg
        >
      </div>
      <div
        class="arrow "
        on:click={() => {
          if (gallery_index < gallery_images.length - 1) {
            gallery_index += 1;
          }
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
          ><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
            d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
          /></svg
        >
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .galleria-container:not(.active) {
    display: none;
  }

  .galleria-container.active {
    position: absolute;
    width: 100vw;
    height: calc(var(--vh, 1vh) * 100);

    z-index: 1000;

    top: 0;

    background-color: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(2px);

    .button-container {
      position: absolute;
      width: 100vw;
      height: calc(var(--vh, 1vh) * 100);

      display: flex;
      flex-direction: column;

      top: 0;

      padding: 1rem 1rem;
      box-sizing: border-box;

      .close {
        color: #0085ff;
        cursor: pointer;

        display: flex;
        justify-content: flex-end;
        align-items: center;

        svg {
          width: 2rem;
          height: 2rem;
        }
      }

      .arrows {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;

        .arrow {
          cursor: pointer;
          height: 2rem;
          width: 2rem;
        }

        .left {
          transform: rotate(180deg);
        }
      }
    }

    .img-list {
      width: 100vw;
      height: 100%;

      display: flex;
      align-items: center;

      overflow: hidden;

      .img-container {
        width: 100vw;
        min-width: 100vw;
        height: 100%;

        padding: 5% 5rem;
        box-sizing: border-box;

        display: flex;
        justify-content: center;

        transition: translate 0.4s ease-in-out;

        img {
          max-height: 100%;
          max-width: 100%;

          object-fit: contain;
          border-radius: 1%;
        }
      }
    }
  }
</style>
