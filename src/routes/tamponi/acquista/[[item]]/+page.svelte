<script lang="ts">
  import ShopButton from "./ShopButton.svelte";
  import render_shark from "$lib/assets/render_shark.png";
  import { onMount } from "svelte";
  import type { PageData } from "./$types";
  import Galleria from "./Galleria.svelte";
  import PriceBar from "./PriceBar.svelte";
  import { generateScene } from "$lib/utils/3D";
  import { add_item_to_cart } from "$lib/stores/cart";
  import { goto } from "$app/navigation";
  import { AppendiceTamponeInfo, IncisioneTamponeInfo, ModelloTamponeInfo, type AppendiceTamponeType, type ModelloTamponeType } from "$lib/data/tampone";

  export let data: PageData;
  let render_container: HTMLDivElement;

  let incisione_text = data.tampone.incisione;
  let gallery_active = false;
  let tampone = data.tampone;

  $: {
    incisione_text = incisione_text.toUpperCase();
    if (incisione_text.length > 3) {
      incisione_text = incisione_text.slice(0, 3);
    }
  }

  function add_to_cart() {
    add_item_to_cart(tampone);
    goto("/frame_site/carrello");
  }

  function select_appendice(appendice: string) {
    if (appendice in AppendiceTamponeInfo) {
      tampone.appendice = appendice as AppendiceTamponeType;
      tampone = tampone
    }
  }

  function select_model(model: string) {
    if (model in ModelloTamponeInfo) {
      tampone.modello = model as ModelloTamponeType;
      tampone = tampone
    }
  }

  onMount(async () => {
    let { renderer, scene, camera, item } = await generateScene(
      render_container,
      "/long.gltf"
    );
    camera.position.z = 250;

    function animate(time: number) {
      requestAnimationFrame(animate);

      renderer.render(scene, camera);

      item.rotation.y += 0.01;
    }

    requestAnimationFrame(animate);
  });
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="acquista">
  <Galleria
    close_gallery={() => {
      gallery_active = false;
    }}
    {gallery_active}
  />
  <div class="content">
    <div class="display">

    <div class="grid-container position-container">
      <div class="position">
        <!-- <img class="render" src={render_shark} alt="" /> -->
        <div bind:this={render_container} class="render-container" />
      </div>
    </div>
    <div class="grid-container galleria-container">
      <div
        class="galleria link"
        on:click={() => {
          gallery_active = true;
        }}
      >
        Galleria
      </div>
    </div>
    <div class="grid-container info-container">
      <div class="info">
        hai qualche <span>domanda?</span>
        scrivi a questo numero<br /> +3987223423
      </div>
    </div>
    </div>
    <div class="form">
      <div class="titolo">Personalizza il tuo componente</div>
      <div class="sub-titolo">qui puoi scegliere</div>

      <div class="divider" />
      <div class="header">Incisione personalizzata</div>
      <ShopButton
        label={IncisioneTamponeInfo(incisione_text).label}
        cost={IncisioneTamponeInfo(incisione_text).costo}
        selected={incisione_text !== ""}
        no_pointer={true}
        no_hover={true}
      >
        <input
          class="incisione-text"
          type="text"
          placeholder="Max 3 caratteri"
          bind:value={incisione_text}
        />
      </ShopButton>
      <div class="divider" />
      <div class="header">Appendice personalizzata: </div>
      {#each Object.entries(AppendiceTamponeInfo) as [key, appendice]}
        <ShopButton
          label={appendice.label}
          cost={appendice.costo}
          selected={key === tampone.appendice}
          onClick={() => select_appendice(key)}
        />
      {/each}
      <div class="divider" />
      <div class="header">Modello moto: </div>
      {#each Object.entries(ModelloTamponeInfo) as [key, modello]}
        <ShopButton
          label={modello.label}
          cost={modello.costo}
          selected={key === tampone.modello}
          onClick={() => select_model(key)}
        />
      {/each}
    </div>
  </div>
  <PriceBar tampone={tampone} {add_to_cart} />
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

      .display {
        flex: 1;

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 4rem 4rem;
        grid-template-areas:
          "position"
          "galleria"
          "info";

        padding: 4rem 0 4rem 0;
        box-sizing: border-box;

        .grid-container {
          display: flex;
          justify-content: center;
          align-items: center;

          width: 100%;
          height: 100%;
        }

        .position-container { grid-area: position; }
        .galleria-container { grid-area: galleria; }
        .info-container { grid-area: info; }

        .galleria {
          grid-area: galleria;
          color: #0085ff;
          cursor: pointer;

          z-index: 1;

          background-color: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(2px);
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;

          width: fit-content;
        }

        .info {
          grid-area: info;
          font-size: small;
          text-align: center;
          color: var(--color-var0);

          z-index: 1;
          background-color: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(2px);
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;

          width: fit-content;

          span {
            color: var(--color-var2);
          }
        }

        .position {
          grid-area: position;
          position: relative;

          // max-width: 0px;
          max-height: 0px;

          background-color: red;

          pointer-events: none;

          .render-container {
            position: absolute;

            left: -350px;
            top: -500px;

            width: 700px;
            height: 1000px;
            // aspect-ratio: 1/1;

            display: flex;
            justify-content: center;
            align-items: center;
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

        .display {
          padding: 0;
          min-height: 15rem;

          grid-template-rows: 1fr 1rem 1fr;
          grid-template-areas:
            "galleria"
            "position"
            "info";

          .position {
            .render-container {
              left: -200px;
              top: -300px;

              width: 400px;
              height: 600px;
            }
          }
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
