<script lang="ts">
import ShopButton from "./ShopButton.svelte";
import render_shark from "$lib/assets/render_shark.png";
import { onMount } from "svelte";
import type { PageData } from "./$types";

import PriceBar from "./PriceBar.svelte";
import { CostoIncisioneTampone, generaTamponeDaShopInfo, type TamponeParts, type TamponeType } from "$lib/data/tampone";

export let data: PageData;

let shop_sections = data.shopinfo;
let incisione_text = "";

$: {
  incisione_text = incisione_text.toUpperCase();
  if (incisione_text.length > 3) {
    incisione_text = incisione_text.slice(0, 3);
  }
}

$: tampone = generaTamponeDaShopInfo(shop_sections, incisione_text);

let gallery_active = false;
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="acquista">
  <div class="content">
    <div class="render-container">
      <img class="render" src={render_shark} alt="" />
      <div class="galleria link" on:click={() => {gallery_active = true}}>Galleria</div>
      <div class="info">
        hai qualche <span>domanda?</span>
        scrivi a questo numero<br /> +3987223423
      </div>
    </div>
    <div class="form">
      <div class="titolo">Personalizza il tuo componente</div>
      <div class="sub-titolo">qui puoi scegliere</div>

      <div class="divider" />
      <div class="header">Incisione personalizzata</div>
      <ShopButton
        label={incisione_text === "" ? "Nessuna incisione" : "Incisione personalizzata: "}
        cost={incisione_text === "" ? CostoIncisioneTampone[0] : CostoIncisioneTampone[1]}
        selected={incisione_text !== ""}
        >
        <input class="incisione-text" type="text" placeholder="Max 3 caratteri" bind:value={incisione_text} />
      </ShopButton>
      {#each Object.values(shop_sections) as section, i}
        <div class="divider" />
        <div class="header">{section.header}</div>
        {#each section.options as option, index}
          <ShopButton
            label={option.label}
            cost={option.price}
            selected={section.selected === index}
            onClick={() => {
              section.selected = index;
              shop_sections = shop_sections;
            }}
          >
          </ShopButton>
        {/each}
      {/each}
    </div>
  </div>
  <PriceBar costo={tampone.costo} />
</div>

<style lang="scss">
  .acquista {
    --bar-height: 5rem;

    display: flex;
    flex-direction: column;
    height: 100%;

    .content {
      /* border: 5px solid cyan; */
      height: calc(100% - var(--bar-height));

      display: flex;
      flex: 1;

      .render-container {
        flex: 1;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        gap: 0.5rem;

        padding: 2rem 0 8rem 0;
        box-sizing: border-box;

        .galleria {
          color: #0085ff;
          cursor: pointer;
        }

        .info {
          font-size: small;
          text-align: center;
          color: var(--color-var0);
          span {
            color: var(--color-var2);
          }
        }

        .render {
          width: 50%;
          aspect-ratio: 1/1;

          canvas {
            width: 100%;
            height: 100%;
          }
        }
      } 

      .form {
        .incisione-text {
          width: 8rem;
          height: 2rem;
          border-radius: 0.4rem;
          padding: 0.3rem;
          border: 1px solid rgb(185, 185, 185);

          text-align: center;
        }

        .divider {
          min-height: 0.1rem;
          max-height: 0.1rem;
          background-color: black;
        }

        .titolo {
          font-size: xx-large;
          font-weight: 600;
        }

        .sub-titolo { 
          color: var(--color-var1);
        }

        .header {
          color: var(--color-var3);
          font-size: large;
        }
        /* border: 5px solid green; */
        flex: 1;
        padding: 2rem;
        overflow-y: scroll;
        display: flex;
        flex-direction: column;

        gap: 1.5rem;
      }
    }
  }
  @media (max-width: 768px) {
    .acquista {
      .content {
        flex-direction: column;
        overflow-y: scroll;

        .render-container {
          padding: 2rem 0 0 0;
        }

        .form {
          overflow-y: visible;

          .incisione-text {
            flex: 1;
            width: 4rem;
            height: 2rem;
            border-radius: 0.4rem;
            padding: 0.3rem;
            border: 1px solid rgb(185, 185, 185);

            text-align: center;
          }
        }
      }

      
    }
  }
</style>
