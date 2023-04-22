import { c as create_ssr_component, b as add_attribute } from './index2-6e589ef6.js';
import './navbar-e0faa3f2.js';
import './index-b0bac5bf.js';

const video_render = "/frame_site/_app/immutable/assets/video_render.4ef18d9b.mp4";
const css = {
  code: ".panoramica.svelte-1m5wz3i.svelte-1m5wz3i{width:100%;height:100%;overflow-y:scroll;scroll-behavior:smooth;scrollbar-width:none}.panoramica.svelte-1m5wz3i .page.svelte-1m5wz3i{color:white;scroll-snap-align:start;width:100%;box-sizing:border-box;transition:all ease-in 4s}.panoramica.svelte-1m5wz3i .page .text.svelte-1m5wz3i{color:white;transform:translateX(5vh);transition:all ease-in 4s}.panoramica.svelte-1m5wz3i .page .title.svelte-1m5wz3i{color:white;transform:translateX(5vh);transition:all ease-in 4s}.panoramica.svelte-1m5wz3i .page span.svelte-1m5wz3i{text-align:end;color:white;transform:translateY(5vh);transition:all ease-in 4s}.panoramica.svelte-1m5wz3i .in-page .title.svelte-1m5wz3i{color:black;transform:translateX(0vh);transition:all ease-in 2s}.panoramica.svelte-1m5wz3i .in-page .text.svelte-1m5wz3i{color:grey;transform:translateX(0vh);transition:all ease-in 2s}.panoramica.svelte-1m5wz3i .in-page span.svelte-1m5wz3i{text-align:end;color:grey;transition:all ease-in 3s}.panoramica.svelte-1m5wz3i .page.svelte-1m5wz3i:first-child{z-index:-1;position:relative;overflow:hidden}.panoramica.svelte-1m5wz3i .page:first-child video.svelte-1m5wz3i{width:100%;height:100vh;object-fit:cover}.panoramica.svelte-1m5wz3i .page:first-child .blur.svelte-1m5wz3i{position:absolute;bottom:0;height:2rem;width:100%;background:rgb(0, 0, 0);background:linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgb(255, 255, 255) 50%)}.panoramica.svelte-1m5wz3i .page.svelte-1m5wz3i:nth-child(2){display:grid;grid-template-columns:50vw 1fr;grid-template-rows:8rem 1fr;gap:2rem}.panoramica.svelte-1m5wz3i .page:nth-child(2) .title.svelte-1m5wz3i{grid-column:1/3;grid-row:1;display:flex;justify-content:center;align-items:center;font-size:5rem}.panoramica.svelte-1m5wz3i .page:nth-child(2) .text.svelte-1m5wz3i{grid-column:2;grid-row:2;display:flex;flex-direction:column;justify-content:space-around;font-size:2rem}.panoramica.svelte-1m5wz3i .page:nth-child(2) .render-container.svelte-1m5wz3i{grid-column:1;grid-row:2;display:flex;justify-content:center;align-items:center;border:5px solid red}.panoramica.svelte-1m5wz3i .page.svelte-1m5wz3i:not(:first-child){height:calc(var(--vh, 1vh) * 100 - var(--navbar-height-2));padding:0 2rem}@media(max-width: 768px){.panoramica.svelte-1m5wz3i .page.svelte-1m5wz3i:first-child{height:calc(var(--vh, 1vh) * 100 - var(--navbar-height-2))}@keyframes svelte-1m5wz3i-glowing{0%{box-shadow:0 0 5px var(--color-var4)}50%{box-shadow:0 0 20px var(--color-var4)}100%{box-shadow:0 0 5px var(--color-var4)}}.float-acquista.svelte-1m5wz3i.svelte-1m5wz3i{position:absolute;bottom:1rem;right:1rem;width:9rem;height:3rem;display:flex;justify-content:center;align-items:center;cursor:pointer;color:white;font-size:1.2rem;font-weight:bold;border-radius:10rem;background-color:var(--color-var4);animation:svelte-1m5wz3i-glowing 5s infinite ease}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let panoramica_element;
  let render_container;
  $$result.css.add(css);
  return `
<div class="${"panoramica svelte-1m5wz3i"}"${add_attribute("this", panoramica_element, 0)}><div class="${"page in-page svelte-1m5wz3i"}" id="${"page1"}"><video autoplay muted loop${add_attribute("src", video_render, 0)} class="${"svelte-1m5wz3i"}"></video>
    <div class="${"blur svelte-1m5wz3i"}"></div></div>
  <div class="${"page in-page svelte-1m5wz3i"}" id="${"page2"}"><div class="${"render-container svelte-1m5wz3i"}"${add_attribute("this", render_container, 0)}></div>
    <div class="${"title svelte-1m5wz3i"}">Più di un semplice tampone</div>
    <div class="${"text svelte-1m5wz3i"}">Migliora la tua esperienza di guida in moto con il nostro tampone
      aereodinamico. 
      <span class="${"svelte-1m5wz3i"}">Grazie alle sue appendici intercambiabili, potrai scegliere
        quella che meglio si adatta al tuo stile e alle tue esigenze. Inoltre, la
        sua costruzione resistente e durevole ti garantirà prestazioni elevate e
        durature.
      </span></div></div>
  <div class="${"page svelte-1m5wz3i"}" id="${"page3"}">3</div>
  <div class="${"page svelte-1m5wz3i"}" id="${"page4"}">4</div>
  <div class="${"page svelte-1m5wz3i"}" id="${"page5"}">5</div>
  <div class="${"page svelte-1m5wz3i"}" id="${"page6"}">6</div>
  <div class="${"page svelte-1m5wz3i"}" id="${"page7"}">7</div>
  <div class="${"float-acquista mobile-only svelte-1m5wz3i"}">Acquista</div>
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-804999c7.js.map
