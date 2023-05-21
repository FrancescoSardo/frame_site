<script lang="ts">
  import { goto } from "$app/navigation";
  import video_render from "$lib/assets/video_render.mp4";
  import { top_navbar_active } from "$lib/stores/navbar";
  // import { createScene } from "$lib/utils/3D";
  import { onMount, onDestroy } from "svelte";
  import Pagina3 from "./Pagina3.svelte";
  import Pagina4 from "./Pagina4.svelte";
  import './page.scss'
  import Pagina5 from "./Pagina5.svelte";
  import { createScene, loadObjectAsync } from "$lib/utils/3D";
  let active_page;
  import type { Object3D } from "three";
  import Pagina6 from "./Pagina6.svelte";

  $:{
      let active_page;
    }

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
  let scene_L: THREE.Scene;
  let last_scroll = 0;
  let tamponi3D: { [key in string]: Object3D } = {};

  onMount( async () => {
    loadObjectAsync("/long.gltf", (obj) => {
      tamponi3D["long"] = obj;
      scene_L.add(obj);
    });


    // let { renderer, scene, camera } = await generateScene(render_container, "/long.gltf");
    let sceneData_L = await createScene(render_container);
    let renderer = sceneData_L.renderer;
    let camera = sceneData_L.camera;
    scene_L = sceneData_L.scene;
    function animate(time: number) {
      requestAnimationFrame(animate);
      
       renderer.render(scene_L, camera);
       scene_L.rotateY(0.004)
       
    }

    requestAnimationFrame(animate);
  
   let elements = document.querySelectorAll(".page");

   let observer = new IntersectionObserver(
     (entries) => {
      for (let entry of entries) {
        if (entry.isIntersecting) {
          console.log("test", entry.target.id )
          /* element.classList.add("my-class"); */
          var element = document.getElementById(entry.target.id);
          element?.classList.add("in-page");
          /* let value = entry.target.id.charAt(4);
          active_page = parseInt(value); */
        }else{
          var element = document.getElementById(entry.target.id);
          element?.classList.remove("in-page");
        }
      }
    },
    { threshold: [0.5] }
  );

  for (let element of elements) {
    observer.observe(element);
  }
  });
</script>

<!-- svelte-ignore a11y-media-has-caption -->
<div
  class="panoramica"
  
  on:scroll={scroll_handler}
  bind:this={panoramica_element}
>
  <div class="page in-page" id="page1">
    <video autoplay muted loop src={video_render} />
    <div class="blur" />
  </div>
  <div class="in-page page"  id="page2">
    <div class="render-container" bind:this={render_container} />
    <div class="title">Più di un semplice tampone</div>
    <div class="text">
      Migliora la tua esperienza di guida in moto con il nostro tampone
      aereodinamico. 
      <span>
             Grazie alle sue appendici intercambiabili, potrai scegliere
        quella che meglio si adatta al tuo stile e alle tue esigenze. Inoltre, la
        sua costruzione resistente e durevole ti garantirà prestazioni elevate e
        durature.
      </span>
    </div>
   
  </div>
  <div class="page" id="page3">
    <Pagina3 />
  </div>
  <div class="page" id="page4">
    <Pagina4 />
  </div>
  <div class="page" id="page5">
    <Pagina5 />
  </div>
  <div class="page" id="page6">
    <Pagina6 />
  </div>
  <div class="page" id="page7">7</div>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="float-acquista mobile-only"  on:click={() => {
    goto("/frame_site/tamponi/acquista");
  }}>Acquista</div>
</div>

<style lang="scss">
  .panoramica {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    scroll-behavior: smooth;
    scrollbar-width: none;
    scroll-snap-type: mandatory;
/*     scroll-snap-type: y mandatory; */

    .page:not(.in-page){      
      color: transparent;      
      scroll-snap-align: start;
      width: 100%;
      box-sizing: border-box;
      transition: all ease-in 4s;
      .text{
        color: transparent;
        transform: translateX(5vh);
        transition: all ease-in 4s;
      }
      .title{
        color: transparent;
        transform: translateX(5vh);
        transition: all ease-in 4s;
      }
      span{
        text-align: center;
        color: transparent;
        transform: translateY(5vh);
        transition: all ease-in 4s;
      }
    }
    
  
    .page:first-child {

      z-index: -1;
      position: relative;
      overflow: hidden;
      video {
        width: 100%;
        // max-height: 100%;
        height: 100vh;

        object-fit: cover;
      }

      .blur {
        position: absolute;
        bottom: 0;
        height: 2rem;
        width: 100%;
        // background-color: red;
        background: rgb(0, 0, 0);
        background: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0) 0%,
          rgba(255, 255, 255, 1) 50%
        );
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
        flex-direction: column;
        justify-content: space-around;



        font-size: 2rem;
        /* color: gray; */
      }
      span{
        
      }

      .render-container {
        grid-column: 1;
        grid-row: 2;

        display: flex;
        justify-content: center;
        align-items: center;

        /* border: 5px solid red; */

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

    
  }

  @media (max-width: 768px) {
    .panoramica {

      .page:first-child {
        height: calc(var(--vh, 1vh) * 100 - var(--navbar-height-2));
      }
      .page:nth-child(2){
        .title{
          font-size: 3rem;
          font-size:3rem;
        }
        .text{
          font-size: 1rem;
        }
      }
      .page:not(:first-child) {
      padding: 0rem;
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
