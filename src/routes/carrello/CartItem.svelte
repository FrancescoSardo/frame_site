<script lang="ts">
  import { goto } from "$app/navigation";
  import type { Tampone } from "$lib/data/tampone";
  import { remove_item_from_cart } from "$lib/stores/cart";
  import { shop_store } from "$lib/stores/shop";

  export let tampone: Tampone;
  export let image: string = "";
  export let newitem: boolean = false;

  // let specifiche_text =
  //   tampone.incisione != "" ? `incisione: ${tampone.incisione}, ` : "";
  // specifiche_text += `appendice: ${tampone.appendice}, modello: ${tampone.modello}`;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="item" class:newitem>
  <div class="card">
    <div class="scopri-container">
      <div class="scopri">aggiungi articolo</div>
    </div>
    <div class="image-container"><img class="image" src={image} alt="" /></div>
    <div class="info display">
      <div class="item-type">Tampone</div>
      {#if tampone.incisione != ""}
        <div class="info-row incisione">
          <div class="label">incisione:</div>
          <div class="value">{tampone.incisione}</div>
        </div>
      {/if}
      <div class="info-row appendice">
        <div class="label">appendice:</div>
        <div class="value">{tampone.appendice}</div>
      </div>
      <div class="info-row modello">
        <div class="label">modello:</div>
        <div class="value">{tampone.modello}</div>
      </div>
    </div>
    <div class="prezzo display">
      <div class="text">Prezzo:</div>
      <div class="value">€{tampone.costo}</div>
    </div>
  </div>
  <div class="actions">
    <div
      class="btn edit"
      on:click={() => {
        shop_store.set(tampone);
        goto("/frame_site/tamponi/acquista");
        remove_item_from_cart(tampone);
      }}
    >
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
        ><g id="SVGRepo_bgCarrier" stroke-width="0" /><g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        /><g id="SVGRepo_iconCarrier"
          ><path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="m3.99 16.854-1.314 3.504a.75.75 0 0 0 .966.965l3.503-1.314a3 3 0 0 0 1.068-.687L18.36 9.175s-.354-1.061-1.414-2.122c-1.06-1.06-2.122-1.414-2.122-1.414L4.677 15.786a3 3 0 0 0-.687 1.068zm12.249-12.63 1.383-1.383c.248-.248.579-.406.925-.348.487.08 1.232.322 1.934 1.025.703.703.945 1.447 1.025 1.934.058.346-.1.677-.348.925L19.774 7.76s-.353-1.06-1.414-2.12c-1.06-1.062-2.121-1.415-2.121-1.415z"
          /></g
        ></svg
      >
    </div>
    <div
      class="btn remove"
      on:click={() => {
        remove_item_from_cart(tampone);
      }}
    >
      <svg
        version="1.1"
        id="_x32_"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 512 512"
        xml:space="preserve"
        ><g id="SVGRepo_bgCarrier" stroke-width="0" /><g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        /><g id="SVGRepo_iconCarrier">
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
  .item {
    display: flex;
    margin: 0 3rem;

    .card {
      .scopri-container { display: none; }

      flex: 1;
      padding: 1rem;
      box-sizing: border-box;
      height: 12rem;
      // background-color: red;

      display: grid;
      grid-template-columns: 3fr 2fr;
      grid-template-rows: 2fr 1fr;
      gap: 1.5rem;

      border: 2px solid gray;
      border-radius: 0.5rem;

      .image-container {
        grid-column: 2;
        grid-row: 1 / 3;

        padding: 0.5rem;

        .image {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }

      .info {
        grid-column: 1;
        grid-row: 1;
        
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        .item-type {
          font-weight: 600;
          font-size: 1.2rem;
        }

        .info-row {
          display: flex;
          gap: 0.5rem;

          .label {
            color: gray;
          }
        }
      }

      .prezzo {
        grid-column: 1;
        grid-row: 2;

        .text {
          color: gray;
        }

        .value {
          font-weight: 600;
          font-size: 1.1rem;
        }
      }
    }

    .actions {
      width: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1rem;
      padding: 1rem 0.3rem;
      box-sizing: border-box;

      .btn {
        cursor: pointer;
        fill: black;
        transition: fill 0.2s ease-in-out;
      }

      .btn:hover {
        fill: #0085ff;
      }
    }
  }

  .newitem {
    // background-color: #f5f5f5;

    .card {
      position: relative;
      overflow: hidden;

      &::before {
        content: "";
        position: absolute;
        height: 100%;
        width: 100%;

        // border-radius: 0.5rem;

        background-color: rgba(255, 255, 255, 0.5);
        // background blur
        backdrop-filter: blur(5px);

        transition: background-color 0.2s ease-in-out, backdrop-filter 0.2s ease-in-out;
      }

      .scopri-container {
        position: absolute;
        height: 100%;
        width: 100%;

        display: flex;

        align-items: center;
        justify-content: center;

        cursor: pointer;

        .scopri {
          padding: 0.2rem 1rem;

          display: flex;
          align-items: center;
          justify-content: center;

          color: #0085ff;
          border: 2px solid #0085ff;
          border-radius: 6rem;

          transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
        }
      }
    }

    .card:hover {
      &::before {
        background-color: rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(4px);
      }

      .scopri-container {
        .scopri {
          background-color: #0085ff;
          color: white;
        }
      }
    }

    .actions {
      opacity: 0;
      transition: opacity 0.2s ease-in-out;
    }
  }
</style>
