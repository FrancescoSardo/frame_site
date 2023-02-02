<script lang="ts">
  import { active_page, setActivePage } from "$lib/stores/active_page";
  import { setBackgroundSplit } from "$lib/stores/bg_store";
  import { onMount } from "svelte";
  import {
    Object3D,
    PointLight,
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
  } from "three";
  import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
  import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
  import TWEEN, { Easing, Tween } from "@tweenjs/tween.js";
  import type { PageData } from "./$types";

  let page = 0;
  let pages = 0;

  let render_container: HTMLDivElement;

  const product_page_data: {
    bg_split: number;
    canvas_position: { x: number; y: number };
    rotation: { x: number; y: number };
  }[] = [
    {
      bg_split: 70,
      canvas_position: { x: 0.8, y: 0.3 },
      rotation: { x: 1, y: 1 },
    },
    {
      bg_split: 30,
      canvas_position: { x: 0.3, y: 0.4 },
      rotation: { x: 0.5, y: 0.5 },
    },
    {
      bg_split: 50,
      canvas_position: { x: 0.3, y: 0.8 },
      rotation: { x: 0.1, y: 0.1 },
    },
  ];

  onMount(async () => {
    let elements = document.querySelectorAll(".product-page");
    let item: Object3D;
    pages = elements.length;

    active_page.subscribe((value) => {
      let old_page = page;
      page = value;
      setBackgroundSplit(product_page_data[page].bg_split);

      render_container.style.setProperty(
        "--x-position",
        product_page_data[page].canvas_position.x.toString()
      );
      render_container.style.setProperty(
        "--y-position",
        product_page_data[page].canvas_position.y.toString()
      );

      let rotation = { ...product_page_data[old_page].rotation };

      new Tween(rotation)
        .to({ ...product_page_data[page].rotation }, 1000)
        .easing(Easing.Quadratic.Out)
        .onUpdate(() => {
          item.rotation.x = rotation.x;
          item.rotation.y = rotation.y;
        })
        .start();
    });

    let observer = new IntersectionObserver(
      (entries) => {
        for (let entry of entries) {
          if (entry.isIntersecting) {
            let value = entry.target.id.charAt(4);
            setActivePage(Number.parseInt(value));
          }
        }
      },
      { threshold: [0.5] }
    );

    for (let element of elements) {
      observer.observe(element);
    }

    // let loader = new OBJLoader();
    let loader = new GLTFLoader();

    const scene = new Scene();

    const camera = new PerspectiveCamera(
      75,
      render_container.clientWidth / render_container.clientHeight,
      0.1,
      2000
    );
    const renderer = new WebGLRenderer({ alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(
      render_container.clientWidth,
      render_container.clientHeight
    );

    let obj = await loader.loadAsync("/models/craneo1/scene.gltf");

    item = obj.scene;
    scene.add(obj.scene);

    camera.position.z = 2.5;

    // add point light
    const pointLight = new PointLight(0xffffff, 1, 1000);
    pointLight.position.set(0, 0, 3);
    scene.add(pointLight);

    render_container.appendChild(renderer.domElement);

    function animate(time: number) {
      requestAnimationFrame(animate);

      TWEEN.update(time);

      renderer.render(scene, camera);
    }

    requestAnimationFrame(animate);
  });

  export let data: PageData;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="product">
  <div class="content-container">
    {#each Array(product_page_data.length).fill(0) as _, i}
      <div class={`product-page c${i}`} id={`page${i}`} />
    {/each}
  </div>
  <div class="canvas-container">
    <div bind:this={render_container} class="render-container" />
  </div>
</div>

<style lang="scss">
  .product {
    height: 100%;
    width: 100%;

    display: grid;
    grid-template-columns: 5rem 1fr;
    grid-template-rows: 1fr;

    .canvas-container {
      pointer-events: none;
      position: absolute;
      top: var(--navbar-height);
      left: 0;

      height: calc(100vh - var(--navbar-height));
      width: 100vw;

      box-sizing: border-box;

      .render-container {
        --x-position: 0.5;
        --y-position: 0.5;

        position: relative;

        left: calc(100vw * var(--x-position) - 256px);
        top:  calc((100vh - var(--navbar-height)) * var(--y-position) - 256px);

        width: 512px;
        height: 512px;

        // border: 1px solid black;

        transition: left 1s ease-in-out, top 1s ease;
      }
    }

    .content-container {
      grid-column: 1 / 3;
      grid-row: 1;

      overflow-y: scroll;

      scroll-behavior: smooth;
      scroll-snap-type: y mandatory;

      .product-page {
        height: 100%;
        width: 100%;

        transition: opacity 1s;

        scroll-snap-align: start;

        &.c0 {
          // background-color: red;
        }

        &.c1 {
          // background-color: blue;
        }

        &.c2 {
          // background-color: green;
        }

        &.c3 {
          // background-color: yellow;
        }

        &.c4 {
          // background-color: purple;
        }

        &.c5 {
          // background-color: orange;
        }

        &.c6 {
          // background-color: black;
        }
      }
    }
  }
</style>
