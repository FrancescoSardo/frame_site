<script lang="ts">
  import video_render from "$lib/assets/video_render.mp4";
  import { top_navbar_active } from "$lib/stores/navbar";
  import { generateScene } from "$lib/utils/3D";
  import { onMount, onDestroy } from "svelte";

  function scroll_handler() {
    let delta = panoramica_element.scrollTop - last_scroll;
    last_scroll = panoramica_element.scrollTop;

    if (delta < 0) {
      top_navbar_active.set(true);
    } else {
      top_navbar_active.set(false);
    }
  }

  let panoramica_element: HTMLDivElement;
  let render_container: HTMLDivElement;
  let last_scroll = 0;

  onMount(async () => {
    // let { renderer, scene, camera } = await generateScene(render_container, "/long.gltf");

    function animate(time: number) {
      requestAnimationFrame(animate);

      // renderer.render(scene, camera);
    }

    requestAnimationFrame(animate);
  });

  // onMount(() => {
  //   // let elements = document.querySelectorAll(".page");

  //   // let observer = new IntersectionObserver(
  //   //   (entries) => {
  //   //     for (let entry of entries) {
  //   //       if (entry.isIntersecting) {
  //   //         let value = entry.target.id.charAt(4);
  //   //         active_page = parseInt(value);
  //   //       }
  //   //     }
  //   //   },
  //   //   { threshold: [0.5] }
  //   // );

  //   // for (let element of elements) {
  //   //   observer.observe(element);
  //   // }
  // });
</script>

<!-- svelte-ignore a11y-media-has-caption -->
<div class="panoramica" on:scroll={scroll_handler} bind:this={panoramica_element}>
  <div class="page" id="page1">
    <video autoplay muted loop src={video_render}></video>
    <div class="blur" />
  </div>
  <div class="page" id="page2">
    <div class="render-container" bind:this={render_container} />
    <div class="title">Più di un semplice tampone</div>
    <div class="text">Migliora la tua esperienza di guida in moto con il nostro tampone aereodinamico. Grazie alle sue appendici intercambiabili, potrai scegliere quella che meglio si adatta al tuo stile e alle tue esigenze. Inoltre, la sua costruzione resistente e durevole ti garantirà prestazioni elevate e durature.</div>
  </div>
  <div class="page" id="page3">3</div>
  <div class="page" id="page4">4</div>
  <div class="page" id="page5">5</div>
  <div class="page" id="page6">6</div>
  <div class="page" id="page7">7</div>
  <div class="float-acquista mobile-only">Acquista</div>
</div>

<style lang="scss">
  .panoramica {
    width: 100%;
    height: 100%;
    overflow-y: scroll;

    scroll-behavior: smooth;

    // scroll-snap-type: y mandatory;
    scrollbar-width: none;

    .page:first-child {
      position: relative;
      overflow: hidden;
      // border: 5px solid red;
      
      video {
        width: 100%;
        // max-height: 100%;
        height: 120%;
        
        object-fit: contain;
      }

      .blur {
        position: absolute;
        bottom: 0;
        height: 2rem;
        width: 100%;
        // background-color: red;
        background: rgb(0,0,0);
        background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(255,255,255,1) 50%); 
      }
    }

    .page:nth-child(2) {
      display: grid;

      grid-template-columns: 50vw 1fr;
      grid-template-rows: 8rem 1fr;

      gap: 2rem;

      .title {
        grid-column: 1 / 3;
        grid-row: 1;

        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 5rem;
      }

      .text {
        grid-column: 2;
        grid-row: 2;

        display: flex;
        justify-content: center;

        font-size: 2rem;
        color: gray;
      }

      .render-container {
        grid-column: 1;
        grid-row: 2;
        
        display: flex;
        justify-content: center;
        align-items: center;
        
        border: 5px solid red;

        canvas {
          max-width: 100%;
          width: 100%;
          height: 100%;
        }
      }
    }

    .page:not(:first-child) {
      height: calc(var(--vh, 1vh) * 100 - var(--navbar-height-2));

      padding: 0 2rem;
    }

    .page {
      scroll-snap-align: start;

      width: 100%;
      // height: 100%;

      /* border: 5px solid red; */
      box-sizing: border-box;
    }
  }

  @media (max-width: 768px) {
    .panoramica {
      .page:first-child {
        height: calc(var(--vh, 1vh) * 100 - var(--navbar-height-2));
      }
    }

    @keyframes glowing {
      0% {
        box-shadow: 0 0 5px var(--color-var4);
      }
      50% {
        box-shadow: 0 0 20px var(--color-var4);
      }
      100% {
        box-shadow: 0 0 5px var(--color-var4);
      }
    }

    .float-acquista {
      position: absolute;
      bottom: 1rem;
      right: 1rem;
      width: 9rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;

      cursor: pointer;
      color: white;
      font-size: 1.2rem;
      font-weight: bold;

      border-radius: 10rem;

      background-color: var(--color-var4);
      animation: glowing 5s infinite ease;
    }
  }
</style>
