import { c as create_ssr_component, e as escape, b as subscribe, d as add_attribute, v as validate_component } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
/* empty css                                                    */const global = "";
const css$1 = {
  code: ".frame-link.svelte-1jeoh2d.svelte-1jeoh2d{height:fit-content;cursor:pointer;display:flex;flex-direction:column;gap:0.1rem}.frame-link.svelte-1jeoh2d .text.svelte-1jeoh2d{color:rgb(50, 50, 50);transition:color 0.5s ease-in-out;font-weight:500}.frame-link.svelte-1jeoh2d .underline.svelte-1jeoh2d{background-color:rgb(50, 50, 50);height:3px;width:0%;transition:width 0.5s ease-in-out, background-color 0.5s ease-in-out;align-self:center;border-radius:2rem}.frame-link.svelte-1jeoh2d:hover>.underline.svelte-1jeoh2d{width:100%}.frame-link.active.svelte-1jeoh2d.svelte-1jeoh2d{cursor:default}.frame-link.active.svelte-1jeoh2d .text.svelte-1jeoh2d{color:rgb(195, 195, 195)}.frame-link.active.svelte-1jeoh2d .underline.svelte-1jeoh2d{background-color:rgb(195, 195, 195);width:100%}",
  map: null
};
const FrameLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href = "" } = $$props;
  let { text = "" } = $$props;
  let { active = false } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  $$result.css.add(css$1);
  return `<div class="${["frame-link svelte-1jeoh2d", active ? "active" : ""].join(" ").trim()}"><div class="${"text svelte-1jeoh2d"}">${escape(text)}</div>
  <div class="${"underline svelte-1jeoh2d"}"></div>
</div>`;
});
const logo = "/_app/immutable/assets/logo.19ae4c51.svg";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".root-layout.svelte-eoxkwe.svelte-eoxkwe{position:absolute;top:-3rem;left:0;height:calc(100vh + 3rem);width:100vw;transition:top 0.5s ease-in-out, height 0.5s ease-in-out;display:flex;flex-direction:column}.root-layout.svelte-eoxkwe .container.svelte-eoxkwe{height:100%;display:flex;align-items:center;justify-content:center}.root-layout.svelte-eoxkwe .spacer.svelte-eoxkwe{flex:1}.root-layout.svelte-eoxkwe .logo.svelte-eoxkwe{background-color:#fff;display:flex;align-items:center}.root-layout.svelte-eoxkwe .logo img.svelte-eoxkwe{height:2rem}.root-layout.active.svelte-eoxkwe.svelte-eoxkwe{top:0;height:100vh}.root-layout.svelte-eoxkwe .content.svelte-eoxkwe{flex:1}.root-layout.svelte-eoxkwe .navbar.svelte-eoxkwe{display:flex;align-items:center;justify-content:space-between;height:3rem;background-color:#fff;gap:1rem;box-sizing:border-box}.root-layout.svelte-eoxkwe .navbar .title.svelte-eoxkwe{display:flex;color:black;font-size:x-large;margin-right:20%}.root-layout.svelte-eoxkwe .navbar .carrello.svelte-eoxkwe{margin-left:20%}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let route = $page.route.id || "";
  $$result.css.add(css);
  $$unsubscribe_page();
  return `
<div class="${["root-layout svelte-eoxkwe", "active"].join(" ").trim()}"><nav class="${"navbar svelte-eoxkwe"}"><div class="${"spacer svelte-eoxkwe"}"></div>
    <div class="${"logo container svelte-eoxkwe"}"><img${add_attribute("src", logo, 0)} class="${"svelte-eoxkwe"}"></div>
    <div class="${"title container svelte-eoxkwe"}">Frame</div>
    <div class="${"specchietti container svelte-eoxkwe"}">${validate_component(FrameLink, "FrameLink").$$render(
    $$result,
    {
      text: "specchietti",
      active: route.includes("specchietti")
    },
    {},
    {}
  )}</div>
    <div class="${"tamponi container svelte-eoxkwe"}">${validate_component(FrameLink, "FrameLink").$$render(
    $$result,
    {
      text: "tamponi",
      active: route.includes("tamponi")
    },
    {},
    {}
  )}</div>
    <div class="${"carrello container svelte-eoxkwe"}">${validate_component(FrameLink, "FrameLink").$$render(
    $$result,
    {
      text: "carrello",
      active: route.includes("carrello")
    },
    {},
    {}
  )}</div>
    <div class="${"chi-siamo container svelte-eoxkwe"}">${validate_component(FrameLink, "FrameLink").$$render(
    $$result,
    {
      text: "chi siamo",
      active: route.includes("chisiamo")
    },
    {},
    {}
  )}</div>
    <div class="${"spacer svelte-eoxkwe"}"></div></nav>
  <div class="${"content svelte-eoxkwe"}">${slots.default ? slots.default({}) : ``}</div>
</div>`;
});
export {
  Layout as default
};
