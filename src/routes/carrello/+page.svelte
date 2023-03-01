<script lang="ts">
  import type { PageData } from "./$types";
  import render_shark from "$lib/assets/render_shark.png";

  export let data: PageData;

  let items = data.items;

  let totale = items.reduce((acc, item) => {
    return acc + item.costo;
  }, 0);
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
    {#each items as item}
      <div class="divider" />
      <div class="item">
        <div class="image-container"><img class="image" src={render_shark} alt="" /></div>
        <div class="info display">
          <div class="text">Tampone</div>
          <div class="value">Le specifiche vanno qui</div>
        </div>
        <div class="quantita display">
          <div class="text">Quantità</div>
          <div class="value">1</div>
        </div>
        <div class="prezzo display">
          <div class="text">Prezzo</div>
          <div class="value">€{item.costo}</div>
        </div>
        <div class="azioni">
          <div class="remove">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="m3.99 16.854-1.314 3.504a.75.75 0 0 0 .966.965l3.503-1.314a3 3 0 0 0 1.068-.687L18.36 9.175s-.354-1.061-1.414-2.122c-1.06-1.06-2.122-1.414-2.122-1.414L4.677 15.786a3 3 0 0 0-.687 1.068zm12.249-12.63 1.383-1.383c.248-.248.579-.406.925-.348.487.08 1.232.322 1.934 1.025.703.703.945 1.447 1.025 1.934.058.346-.1.677-.348.925L19.774 7.76s-.353-1.06-1.414-2.12c-1.06-1.062-2.121-1.415-2.121-1.415z" fill="#000000"></path></g></svg>
          </div>
          <div class="edit">
            <svg  version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> .st0{fill:#000000;} </style> <g> <path class="st0" d="M410.886,43.93H301.533C299.778,19.793,280.576,0.093,256.005,0c-24.598,0.093-43.8,19.793-45.556,43.93 H101.115c-22.787,0-41.407,18.628-41.407,41.398v1.792v15.543v14.822c0,5.692,4.648,10.35,10.34,10.35h0.674l23.859,342.87 C96.152,493.408,116.075,512,138.853,512h75.745c22.76,0,60.027,0,82.814,0h75.726c22.769,0,42.701-18.592,44.281-41.296 l23.84-342.87h0.675c5.702,0,10.358-4.658,10.358-10.35v-14.822V87.12v-1.792C452.292,62.558,433.654,43.93,410.886,43.93z"></path> </g> </g></svg>
          </div>
        </div>
      </div>
    {/each}
    <div class="bottom-spacer" />
  </div>

  <div class="price-box">
    <div class="first">
      <div class="price">Totale:  <span>{totale}€</span></div>
      <div class="info">
        <div class="container consegna">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
            ><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
              d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
            /></svg
          >
          <div class="info-item ">Arrivo previsto:</div>
          <div class="info-item link"><span>20Nov</span></div>
        </div>
        <div class="container consegna desktop-only">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
            ><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
              d="M45.9 42.1c3-6.1 9.6-9.6 16.3-8.7L307 64 551.8 33.4c6.7-.8 13.3 2.7 16.3 8.7l41.7 83.4c9 17.9-.6 39.6-19.8 45.1L426.6 217.3c-13.9 4-28.8-1.9-36.2-14.3L307 64 223.6 203c-7.4 12.4-22.3 18.3-36.2 14.3L24.1 170.6C4.8 165.1-4.7 143.4 4.2 125.5L45.9 42.1zM308.1 128l54.9 91.4c14.9 24.8 44.6 36.6 72.5 28.6L563 211.6v167c0 22-15 41.2-36.4 46.6l-204.1 51c-10.2 2.6-20.9 2.6-31 0l-204.1-51C66 419.7 51 400.5 51 378.5v-167L178.6 248c27.8 8 57.6-3.8 72.5-28.6L305.9 128h2.2z"
            />
          </svg>
          <div class="info-item">Politica di reso:</div>
          <div class="info-item"><span>20Nov</span> </div>
        </div>
      </div>
    </div>

    <div class="button">Acquista</div>
  </div>
</div>

<style lang="scss">
  .carrello {
    display: flex;
    flex-direction: column;

    max-height: 100%;
    height: 100%;

    // border: 5px solid red;
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

      .divider {
        min-height: 2px;
        max-height: 2px;
        background-color: var(--color-var0);
      }

      .bottom-spacer {
        height: 20rem;
        min-height: 20rem;
      }

      .item {
        height: 10rem;
        min-height: 10rem;

        padding: 1rem 0;
        box-sizing: border-box;

        display: grid;

        grid-template-columns: 10rem 5fr 2fr 2fr 1fr;

        .azioni{
          /* border: solid 1px black; */
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 2rem;

          .remove{
            width: 1.7rem;
            height: 1.7rem;
            cursor: pointer;
          }
          .edit{
            cursor: pointer;
            width: 1.7rem;
            height: 1.7rem;
            svg{
              fill: var(--color-var5);
            }
          }
          .edit:hover{
            *{
              fill: var(--color-var4);
              transition: all 0.2s ease;
            }
          }
          .remove:hover{
            *{
              fill: var(--color-var4);
              transition: all 0.2s ease;
            }
          }
        }
        
        .image-container {
          height: 8rem;
          .image { height: 100%; }
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
            color: var(--color-var0)
          }
        }
      }
    }

      .price-box {
        position: absolute;
        bottom: 2rem;
        left: 10%;
        right: 10%;
        height: 5rem;

        display: flex;
        align-items: center;
        justify-content: center;

        pointer-events: none;
        box-shadow: -2px 1px 45px 34px rgba(255, 255, 255, 0.9);
        -webkit-box-shadow: -2px 1px 45px 34px rgba(255, 255, 255, 0.9);
        -moz-box-shadow: -2px 1px 45px 34px rgba(255, 255, 255, 0.9);

        pointer-events: all;

        background-color: #f5f5f7;
        border: 2px solid #0071e3;
        border-radius: 1.2rem;

        display: flex;
        align-items: center;
        justify-content: space-around;

        .first {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 10rem;
          
          .price{
            font-weight: 700;
            span{
              color: var(--color-var1);
            }
          }

          .info {
            display: flex;
            /* flex-direction: column; */
            gap: 0.5rem;

            .container {
              display: flex;
              align-items: center;
              justify-content: center;
              width: fit-content;
              gap: 0.5rem;
              font-size: small;
              
              svg {
                width: 2rem;
                height: 2rem;
              }

              .info-item {
                color: var(--color-var3);
                span{
                  color: var(--color-var4);
                }
              }
            }
          }
        }

        .button {
          text-align: center;
          background-color: #0085ff;
          color: white;
          user-select: none;
          cursor: pointer;
          padding: 1rem 2rem;
          border-radius: 0.5rem;

          font-size: large;
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

      .price-box {
        .first {
          flex-direction: column;
          align-items: flex-start;
          gap: 0.7rem;

          .info {
            flex-direction: row;
            gap: 1rem;

            .container {
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              gap: 0.1rem;

              .link{
                color: #0071e3;
              }
              
              svg {
                display: none;
              }
            }
            
            .desktop-only{
              display: none;
            }
          }
        }
      }
    }
  }
</style>
