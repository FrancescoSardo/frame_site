<script lang="ts">
  import video_render from '$lib/assets/video_render.mp4';
  import { onMount } from 'svelte';

  let active_page = 1;

  onMount(() => {
    let elements = document.querySelectorAll(".page");

    let observer = new IntersectionObserver(
      (entries) => {
        for (let entry of entries) {
          if (entry.isIntersecting) {
            let value = entry.target.id.charAt(4);
            active_page = parseInt(value);
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
<div class="panoramica">
  <!-- <video autoplay muted loop src={video_render}></video> -->
  <div class="page" id="page1">1</div>
  <div class="page" id="page2">2</div>
  <div class="page" id="page3">3</div>
  <div class="page" id="page4">4</div>
  <div class="page" id="page5">5</div>
  <div class="page" id="page6">6</div>
  <div class="page" id="page7">7</div>
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
      height: calc(var(--vh, 1vh) * 100 - var(--navbar-height-1) - var(--navbar-height-2));
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
}
</style>