import { c as create_ssr_component, b as subscribe } from "../../../chunks/index.js";
import { p as page } from "../../../chunks/stores.js";
/* empty css                                                       */const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".layout.svelte-fg0udj.svelte-fg0udj{display:flex;height:100%;flex-direction:column}.layout.svelte-fg0udj .navbar.svelte-fg0udj{display:flex;gap:3rem;padding-bottom:0.5rem;align-items:flex-end;height:3rem;border-bottom:2px solid black;box-sizing:border-box}.layout.svelte-fg0udj .navbar .spacer.svelte-fg0udj{flex:1}.layout.svelte-fg0udj .navbar .title.svelte-fg0udj{margin-right:45%}.layout.svelte-fg0udj .navbar .link.svelte-fg0udj{cursor:pointer;height:1.5rem;display:flex;align-items:center;justify-content:center}.layout.svelte-fg0udj .navbar .link.active.svelte-fg0udj{cursor:default;color:rgb(195, 195, 195)}.layout.svelte-fg0udj .navbar .acquista.svelte-fg0udj{background-color:rgb(0, 113, 227);padding:0.2rem 1rem 0.2rem 1rem;border-radius:2rem;color:white;box-sizing:border-box}.layout.svelte-fg0udj .navbar .acquista.active.svelte-fg0udj{background-color:rgba(0, 113, 227, 0.4);cursor:default;color:white}.layout.svelte-fg0udj .content.svelte-fg0udj{flex:1}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let route = $page.route.id || "";
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<div class="${"layout svelte-fg0udj"}"><nav class="${"navbar svelte-fg0udj"}"><div class="${"spacer svelte-fg0udj"}"></div>
    <div class="${"title svelte-fg0udj"}">Swab M-Bike</div>
    <div class="${["link panoramica svelte-fg0udj", route.includes("panoramica") ? "active" : ""].join(" ").trim()}">panoramica</div>
    <div class="${["link confronta svelte-fg0udj", route.includes("confronta") ? "active" : ""].join(" ").trim()}">confronta</div>
    <div class="${["link acquista svelte-fg0udj", route.includes("acquista") ? "active" : ""].join(" ").trim()}">acquista</div>
    <div class="${"spacer svelte-fg0udj"}"></div></nav>
  <div class="${"content svelte-fg0udj"}">${slots.default ? slots.default({}) : ``}</div>
</div>`;
});
export {
  Layout as default
};
