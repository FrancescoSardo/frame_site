<script lang="ts">
  import video_render from "$lib/assets/video_render.mp4";
  import { top_navbar_active } from "$lib/stores/navbar";
  import { generateScene } from "$lib/utils/3D";
  import { onMount, onDestroy } from "svelte";

  let render_container: HTMLDivElement;
  let active_page = 1;

  function wheel_handler(e: WheelEvent) {
    if (e.deltaY < 0) {
      top_navbar_active.set(true);
    } else {
      top_navbar_active.set(false);
    }
  }

  onMount(async () => {
    let { renderer, scene, camera } = await generateScene(render_container, "/long.gltf");

    function animate(time: number) {
      requestAnimationFrame(animate);

      renderer.render(scene, camera);
    }

    requestAnimationFrame(animate);

    window.addEventListener("wheel", wheel_handler);
  });

  

  onDestroy(() => {
    window.removeEventListener("wheel", wheel_handler);
  })

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
<div class="panoramica">
  <!-- <video autoplay muted loop src={video_render}></video> -->
  <div class="page" id="page1">
    <div bind:this={render_container} class="render-container" />
  </div>
  <div class="page" id="page2">2</div>
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

    .render-container {
      width: 100%;
      height: 512px;

      display: flex;
      justify-content: center;
      align-items: center;

      canvas {
        width: 512px;
        height: 512px;
      }
    }

    .page:first-child {
      height: calc(
        var(--vh, 1vh) * 100 - var(--navbar-height-1) - var(--navbar-height-2)
      );
    }

    .page:not(:first-child) {
      height: calc(var(--vh, 1vh) * 100 - var(--navbar-height-2));
    }

    .page {
      scroll-snap-align: start;

      width: 100%;
      // height: 100%;

      border: 5px solid red;
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
