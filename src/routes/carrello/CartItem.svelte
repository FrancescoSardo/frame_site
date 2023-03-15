<script lang="ts">
  import { goto } from "$app/navigation";
  import type { Tampone } from "$lib/data/tampone";
  import { remove_item_from_cart } from "$lib/stores/cart";
  import { shop_store } from "$lib/stores/shop";

  export let tampone: Tampone;
  export let quantita: number;
  export let image: string = "";

  let specifiche_text = tampone.incisione != "" ? `incisione: ${tampone.incisione}, ` : ""
  specifiche_text += `appendice: ${tampone.appendice}, modello: ${tampone.modello}`

</script>

<div class="divider" />
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="item">
  <div class="image-container"><img class="image" src={image} alt="" /></div>
  <div class="info display">
    <div class="text">Tampone</div>
    <div class="value">{specifiche_text}</div>
  </div>
  <div class="quantita display">
    <div class="text">Quantità</div>
    <div class="value">{quantita}</div>
  </div>
  <div class="prezzo display">
    <div class="text">Prezzo</div>
    <div class="value">€{tampone.costo * quantita}</div>
  </div>
  <div class="azioni">
    <div class="edit" on:click={() => {
      shop_store.set(tampone);
      goto("/frame_site/tamponi/acquista");
      remove_item_from_cart(tampone);
    }}>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        ><g id="SVGRepo_bgCarrier" stroke-width="0" /><g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        /><g id="SVGRepo_iconCarrier"
          ><path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="m3.99 16.854-1.314 3.504a.75.75 0 0 0 .966.965l3.503-1.314a3 3 0 0 0 1.068-.687L18.36 9.175s-.354-1.061-1.414-2.122c-1.06-1.06-2.122-1.414-2.122-1.414L4.677 15.786a3 3 0 0 0-.687 1.068zm12.249-12.63 1.383-1.383c.248-.248.579-.406.925-.348.487.08 1.232.322 1.934 1.025.703.703.945 1.447 1.025 1.934.058.346-.1.677-.348.925L19.774 7.76s-.353-1.06-1.414-2.12c-1.06-1.062-2.121-1.415-2.121-1.415z"
            fill="#000000"
          /></g
        ></svg
      >
    </div>
    <div class="remove" on:click={() => { remove_item_from_cart(tampone); }}>
      <svg
        version="1.1"
        id="_x32_"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 512 512"
        xml:space="preserve"
        fill="#000000"
        ><g id="SVGRepo_bgCarrier" stroke-width="0" /><g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        /><g id="SVGRepo_iconCarrier">
          <style type="text/css">
            .st0 {
              fill: #000000;
            }
          </style>
          <g>
            <path
              class="st0"
              d="M410.886,43.93H301.533C299.778,19.793,280.576,0.093,256.005,0c-24.598,0.093-43.8,19.793-45.556,43.93 H101.115c-22.787,0-41.407,18.628-41.407,41.398v1.792v15.543v14.822c0,5.692,4.648,10.35,10.34,10.35h0.674l23.859,342.87 C96.152,493.408,116.075,512,138.853,512h75.745c22.76,0,60.027,0,82.814,0h75.726c22.769,0,42.701-18.592,44.281-41.296 l23.84-342.87h0.675c5.702,0,10.358-4.658,10.358-10.35v-14.822V87.12v-1.792C452.292,62.558,433.654,43.93,410.886,43.93z"
            />
          </g>
        </g></svg
      >
    </div>
  </div>
</div>

<style lang="scss">
  .divider {
    min-height: 2px;
    max-height: 2px;
    background-color: var(--color-var0);
  }
  
  .item {
    height: 10rem;
    min-height: 10rem;

    padding: 1rem 0;
    box-sizing: border-box;

    display: grid;

    grid-template-columns: 10rem 5fr 2fr 2fr 1fr;

    .azioni {
      /* border: solid 1px black; */
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;

      .remove {
        width: 1.7rem;
        height: 1.7rem;
        cursor: pointer;
      }
      .edit {
        cursor: pointer;
        width: 1.7rem;
        height: 1.7rem;
        svg {
          fill: var(--color-var5);
        }
      }
      .edit:hover {
        * {
          fill: var(--color-var4);
          transition: all 0.2s ease;
        }
      }
      .remove:hover {
        * {
          fill: var(--color-var4);
          transition: all 0.2s ease;
        }
      }
    }

    .image-container {
      height: 8rem;
      .image {
        height: 100%;
      }
    }

    .display {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-weight: 400;

      .text {
        color: var(--color-var3);
        font-size: medium;
      }

      .value {
        font-weight: 300;
        color: var(--color-var0);
      }
    }
  }

  @media (max-width: 768px) {
    .item {
      height: 15rem;
      grid-template-columns: 1fr auto;
      grid-template-rows: 1fr 1fr 1fr;

      padding: 1rem;
      box-sizing: border-box;

      // gap: 0.5rem;

      .display {
        gap: 0.2rem;
      }

      .image-container {
        grid-column: 2;
        grid-row: 1 / 3;
      }

      .info {
        grid-column: 1;
        grid-row: 1;
      }

      .quantita {
        grid-column: 1;
        grid-row: 2;
      }

      .prezzo {
        grid-column: 1;
        grid-row: 3;
      }

      .azioni {
        grid-column: 2;
        grid-row: 3;
      }
    }
  }
</style>
