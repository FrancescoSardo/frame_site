<script lang="ts">
  import Plane1 from "$lib/assets/img/Plane/Plane_frontale_NO_SFONDO.png";
  import {
    degToRad,
    createScene,
    loadObject,
    loadObjectAsync,
  } from "$lib/utils/3D";
  import { onMount } from "svelte";
  import type { Object3D } from "three";

  let render_container: HTMLDivElement;
  let scene: THREE.Scene;
  let tamponi3D: { [key in string]: Object3D } = {};


  onMount(async () => {
    loadObjectAsync("/long.gltf", (obj) => {
      tamponi3D["long"] = obj;
      scene.add(tamponi3D["long"]);
    });

    let sceneData = await createScene(render_container);
    scene = sceneData.scene;

    let renderer = sceneData.renderer;
    let camera = sceneData.camera;

    function animate(time: number) {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    requestAnimationFrame(animate);
  });
</script>

<div class="pagina6">
  <div class="left6">
    <img src={Plane1} alt="" />
  </div>
  <div class="right6">
    <div class="top6">
      <div class="title6">BELLALI</div>
      <div class="desc6">
        loren lorenlorenlorenlorenlorenlorenloren lorenloren
      </div>
    </div>
    <div class="bottom">
      <div class="arrows">
        <div class="arrow right_a">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
            ><path
              d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
            /></svg
          >
        </div>
        <div class="arrow left_a">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
            ><path
              d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
            /></svg
          >
        </div>
        <!-- <div class="arrow left_a">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
            ><path
              d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
            /></svg
          >
        </div> -->
      </div>
      <div bind:this={render_container} class="render-container" />
    </div>
  </div>
</div>

<style lang="scss">
  @import "page.scss";
  .pagina6 {
    display: flex;
    height: calc(var(--vh, 1vh) * 90 - var(--navbar-height-2));

    .left6 {
      flex: 1.4;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: dimgrey;
      img {
        width: 50%;
        height: 50%;
        object-fit: contain;
      }
    }
    .right6 {
      flex: 1;

      display: flex;
      flex-direction: column;
      .top6 {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        .title6 {
          font-size: 2rem;
          font-weight: 500;
          /* color: Black; */
          /* color: transparent; */
        color: transparent;
        }
        .desc6{
          font-size: 1rem;
          font-weight: 200;
          color: transparent;
        }
      }
      .bottom {
        flex: 1;
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: repeat(2, 1fr);
        /* grid-row-gap: 0px;
        grid-column-gap: 0px; */
        .render-container {
          grid-row: 1 / 2;
          grid-column: 1/3;
          width: 100%;
          height: 100%;
        }
        .arrows {
          grid-column: 1 / span 2;
          grid-row: 1/2;
          box-sizing: border-box;
          width: 100%;
          
          display: flex;
          justify-content: space-between;
          align-items: center;

          .arrow {
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            height: 2rem;
            width: 2rem;
          }
          .right_a {
            transform: rotate(180deg);
          }
          .left_a {
            transform: rotate(00deg);
          }
        }
      }
    }
  }
  @media (max-width: 768px) {
    .pagina {
    }
  }
</style>
