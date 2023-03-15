<script lang="ts">
  import type { PageData } from "./$types";
  import render_shark from "$lib/assets/render_shark.png";
  import PriceBox from "./PriceBox.svelte";
  import CartItem from "./CartItem.svelte";
  import { cart_store, type CartStoreType } from "$lib/stores/cart";

  export let data: PageData;

  let items = data.items;
  cart_store.subscribe((value) => {
    items = value;
  });

  let totale = 0;
  $: { updateTotale(items); }

  function updateTotale(cart_items: CartStoreType) {
    totale = 0;
    for (let [key, item] of Object.entries(cart_items)) {
      totale += item.tampone.costo * item.quantity;
    }
  }
</script>

<div class="carrello">
  <div class="header">
    <div class="title">I tuoi articoli</div>
    <div class="subtitle">
      Qui puoi vedere tutti gli articoli che hai selezionato per l'acquisto e le
      informazioni relative al tuo ordine.
    </div>
  </div>
  <div class="list">
    {#each Object.entries(items) as [_, item]}
      <CartItem tampone={item.tampone} quantita={item.quantity} image={render_shark}/>
    {/each}
    <div class="bottom-spacer" />
  </div>
  <PriceBox {totale} />
</div>

<style lang="scss">
  .carrello {
    display: flex;
    flex-direction: column;

    max-height: 100%;
    height: 100%;

    box-sizing: border-box;

    gap: 2rem;

    .header {
      height: 8rem;
      min-height: 8rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      gap: 1rem;

      .title {
        font-size: xx-large;
        font-weight: bold;
      }

      .subtitle {
        text-align: center;
        color: var(--color-var1);
        width: 25%;
      }
    }
    
    .list {
      flex: 1;
      overflow-y: scroll;

      padding: 0 10%;
      box-sizing: border-box;

      .bottom-spacer {
        height: 20rem;
        min-height: 20rem;
      }
    }
  }

  @media (max-width: 768px) {
    .carrello {
      overflow-y: scroll;

      .header {
        height: 8rem;
        min-height: 8rem;

        .subtitle {
          width: 90%;
        }
  
      }

      .list {
        overflow-y: visible;
        padding: 0 1rem;
      }
    }
  }
</style>
