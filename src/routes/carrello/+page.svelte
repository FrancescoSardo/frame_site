  <script lang="ts">
  import type { PageData } from "./$types";
  import render_shark from "$lib/assets/render_shark.png";
  import PriceBox from "./PriceBox.svelte";
  import CartItem from "./CartItem.svelte";
  import { cart_store, type CartStoreType } from "$lib/stores/cart";
  import { Tampone } from "$lib/data/tampone";

  export let data: PageData;

  let items = data.items;

  // let items = data.items;
  // cart_store.subscribe((value) => {
  //   items = value;
  // });

  $: totale = items.reduce((acc, item) => {
    return acc + item.costo;
  }, 0);
</script>

<div class="carrello">
  <div class="spacer-1" />
  <div class="left">
    <div class="title">I tuoi articoli</div>
    <div class="info">
      Qui puoi vedere tutti gli articoli che hai selezionato per l'acquisto e le
      informazioni relative al tuo ordine.
    </div>
    <div class="itemlist no-navbar">
      {#each items as item}
        <CartItem tampone={item} image={render_shark} />
      {/each}
      <CartItem tampone={new Tampone("", "nessuna", "r6")} image={render_shark} newitem={true} />
      <div class="empty"/>
    </div>
  </div>
  <div class="spacer-3" />
  <div class="right">
    <div class="title">info</div>
    <div class="info">Dicci qualcosa su di te</div>
    <div class="input-content">
      <div class="cont">
        <div class="text">Email</div>
        <input type="text" />
      </div>
      <div class="cont">
        <div class="text">Telefono</div>
        <input type="text" />
      </div>
      <div class="line" />
      <div class="cont">
        <div class="text">Indirizzo Postale</div>
        <input type="text" />
      </div>

      <div class="box">
        <div class="cont side">
          <div class="text">Cap</div>
          <input type="text" class="text" maxlength="5" />
        </div>
        <div class="cont side">
          <div class="text">Città</div>
          <input type="text" class="text" />
        </div>
      </div>

      <div class="cont">
        <div class="text">Note</div>
        <input type="text" />
      </div>

      <div class="line" />
      <!-- Bottoni -->
      <div class="content-tot">
        <div class="button">Acquista</div>
        <div class="spacer-1" />
        <div class="text">Totale:</div>
        <div class="price">€{totale}</div>
      </div>
    </div>
  </div>
  <div class="spacer-1" />
</div>

<style lang="scss">
  .carrello {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    height: 100%;
    max-height: 100%;
  

    .title {
      font-size: 2rem;
      font-weight: 600;

      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;

      height: 10%;
    }

    .info {
      display: flex;
      text-align: center;
      color: gray;
      box-sizing: border-box;
      justify-content: center;

      height: 10%;
    }

    .left {
      width: 100%;
      max-width: 40rem;
      height: 100%;
      box-sizing: border-box;

      .itemlist {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        box-sizing: border-box;

        max-height: 80%;
        height: 80%;
        min-height: 80%;

        overflow-y: scroll;

        .empty {
          min-height: 3rem;
        }
      }
    }

    .right {
      width: 100%;
      max-width: 30rem;
      height: 100%;
      box-sizing: border-box;
      /* height: 100%; */
      padding-bottom: 1rem;

      .input-content {
        height: 80%;
        
        padding: 0 2rem;
        display: flex;
        flex-direction: column;
        // height: 100vh;
        box-sizing: border-box;
        justify-content: space-between;

        .cont {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        input[type="text"] {
          border: none;
          border-radius: 0.2rem;
          border: 1px solid gray;
          background-color: transparent;
          color: black;
          font-size: medium;
          box-sizing: border-box;
          font-size: large;
          height: 3rem;
        }

        .box {
          display: flex;
          box-sizing: border-box;
          gap: 1rem;
          height: fit-content;
          // overflow: hidden;

          .side {
            flex: 1;
          }
        }

        .content-tot {
          display: flex;
          align-items: center;
          
          .button {
            width: 15rem;
            text-align: center;
            user-select: none;
            cursor: pointer;
            padding: 1rem 2rem;
            border-radius: 0.5rem;

            font-size: large;
            box-sizing: border-box;

            // background-color: #0085ff;
            color: #0085ff;
            background-color: white;
            border: 2px solid #0085ff;
            transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

            font-weight: bold;
          }

          .button:hover{
            background-color: #0085ff;
            color: white;
            // background-color: white;
            // color: #0085ff;
          }

          .text{
            font-weight: 100;
            margin-right: 0.5rem;
          }
          .price{
            font-size: x-large;
            font-weight: bold;
          }
        }
      }
    }
  }
  @media (max-width: 768px) {
    .carrello{
      flex-direction: column;
      /* s */
      overflow: scroll;
      
      /* margin-top: var(--navbar-height-2); */

      /* height: calc(var(--vh, 1vh) * 100 - var(--navbar-height-2)); */
      .left{  
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        margin-top: 30rem;
      }
      .right{
        .input-content{
          gap: 1rem;
          .box{
            flex-direction: column;
        }
        }
        
        .content-tot{
          padding: 2rem;
          gap: 1rem;
        }
      }
    }

  }
</style>
