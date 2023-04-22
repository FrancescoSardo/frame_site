import { c as create_ssr_component, v as validate_component, b as add_attribute, d as each, e as escape } from './index2-6e589ef6.js';
import { r as reneder_shark } from './render_shark-79f23b93.js';
import { a as add_item_to_cart } from './cart-cb3249bf.js';
import { I as IncisioneTamponeInfo, A as AppendiceTamponeInfo } from './shop-d8bec1b9.js';
import './index-b0bac5bf.js';

function guard(name) {
  return () => {
    throw new Error(`Cannot call ${name}(...) on the server`);
  };
}
const goto = guard("goto");
const css$4 = {
  code: ".shop-btn.svelte-nw17z6.svelte-nw17z6{user-select:none;display:flex;align-items:center;padding:1rem;box-sizing:border-box;border-radius:1rem;height:5rem;min-height:5rem;width:100%;border:2px solid var(--color-var0);gap:1rem;transition:border 0.3s ease-in-out, color 0.3s ease-in-out, background-color 0.3s ease-in-out;font-weight:bolder}.shop-btn.svelte-nw17z6 .label.svelte-nw17z6{color:var(--color-var0);width:12rem}.shop-btn.svelte-nw17z6 .cost.svelte-nw17z6{color:rgb(158, 155, 155);transition:color 0.3s ease-in-out;min-width:5rem}.shop-btn.selected.svelte-nw17z6.svelte-nw17z6{border:#0071E3 solid 3px;color:#0071E3}.shop-btn.selected.svelte-nw17z6 .label.svelte-nw17z6{color:#0071E3}.shop-btn.selected.svelte-nw17z6 .cost.svelte-nw17z6{color:#0071E3}@media(max-width: 768px){.shop-btn.svelte-nw17z6 .label.svelte-nw17z6{color:var(--color-var0);min-width:8rem}}.shop-btn.svelte-nw17z6.svelte-nw17z6:not(.no_pointer):not(.selected){cursor:pointer}.shop-btn.svelte-nw17z6.svelte-nw17z6:not(.no_hover):not(.selected):hover{background-color:#F5F5F7}",
  map: null
};
const ShopButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label } = $$props;
  let { selected } = $$props;
  let { onClick = () => {
  } } = $$props;
  let { cost } = $$props;
  let { no_pointer = false } = $$props;
  let { no_hover = false } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  if ($$props.cost === void 0 && $$bindings.cost && cost !== void 0)
    $$bindings.cost(cost);
  if ($$props.no_pointer === void 0 && $$bindings.no_pointer && no_pointer !== void 0)
    $$bindings.no_pointer(no_pointer);
  if ($$props.no_hover === void 0 && $$bindings.no_hover && no_hover !== void 0)
    $$bindings.no_hover(no_hover);
  $$result.css.add(css$4);
  return `
<div class="${[
    "shop-btn svelte-nw17z6",
    (selected ? "selected" : "") + " " + (no_pointer ? "no_pointer" : "") + " " + (no_hover ? "no_hover" : "")
  ].join(" ").trim()}"><div class="${"label svelte-nw17z6"}">${escape(label)}</div>
  ${slots.default ? slots.default({}) : ``}
  <div class="${"spacer-1"}"></div>
  <div class="${"cost svelte-nw17z6"}">${escape(cost == 0 ? "" : `+€ ${cost}`)}</div>
</div>`;
});
const foto_render = "/frame_site/_app/immutable/assets/foto_render.7e1806df.png";
const css$3 = {
  code: ".galleria-container.svelte-5zlcny.svelte-5zlcny:not(.active){display:none}.galleria-container.active.svelte-5zlcny.svelte-5zlcny{position:absolute;width:100vw;height:calc(var(--vh, 1vh) * 100);z-index:1000;top:0;background-color:rgba(255, 255, 255, 0.6);backdrop-filter:blur(2px)}.galleria-container.active.svelte-5zlcny .button-container.svelte-5zlcny{position:absolute;width:100vw;height:calc(var(--vh, 1vh) * 100);display:flex;flex-direction:column;top:0;padding:1rem 1rem;box-sizing:border-box}.galleria-container.active.svelte-5zlcny .button-container .close.svelte-5zlcny{color:#0085ff;cursor:pointer;display:flex;justify-content:flex-end;align-items:center}.galleria-container.active.svelte-5zlcny .button-container .close svg.svelte-5zlcny{width:2rem;height:2rem}.galleria-container.active.svelte-5zlcny .button-container .arrows.svelte-5zlcny{display:flex;justify-content:space-between;align-items:center;height:100%}.galleria-container.active.svelte-5zlcny .button-container .arrows .arrow.svelte-5zlcny{cursor:pointer;height:2rem;width:2rem}.galleria-container.active.svelte-5zlcny .button-container .arrows .left.svelte-5zlcny{transform:rotate(180deg)}.galleria-container.active.svelte-5zlcny .img-list.svelte-5zlcny{width:100vw;height:100%;display:flex;align-items:center;overflow:hidden}.galleria-container.active.svelte-5zlcny .img-list .img-container.svelte-5zlcny{width:100vw;min-width:100vw;height:100%;padding:5% 5rem;box-sizing:border-box;display:flex;justify-content:center;transition:translate 0.4s ease-in-out}.galleria-container.active.svelte-5zlcny .img-list .img-container img.svelte-5zlcny{max-height:100%;max-width:100%;object-fit:contain;border-radius:1%}",
  map: null
};
const Galleria = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let gallery_images = [foto_render, reneder_shark, foto_render, reneder_shark, foto_render];
  let gallery_index = 0;
  let { gallery_active = false } = $$props;
  let { close_gallery } = $$props;
  if ($$props.gallery_active === void 0 && $$bindings.gallery_active && gallery_active !== void 0)
    $$bindings.gallery_active(gallery_active);
  if ($$props.close_gallery === void 0 && $$bindings.close_gallery && close_gallery !== void 0)
    $$bindings.close_gallery(close_gallery);
  $$result.css.add(css$3);
  return `

<div class="${["galleria-container svelte-5zlcny", gallery_active ? "active" : ""].join(" ").trim()}"><div class="${"img-list svelte-5zlcny"}">${each(gallery_images, (image, i) => {
    return `<div style="${"translate: -" + escape(gallery_index * 100, true) + "vw"}" class="${"img-container svelte-5zlcny"}"><img${add_attribute("src", image, 0)} class="${"svelte-5zlcny"}">
      </div>`;
  })}</div>
  <div class="${"button-container svelte-5zlcny"}"><div class="${"close svelte-5zlcny"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 320 512"}" class="${"svelte-5zlcny"}"><path d="${"M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"}"></path></svg></div>
    <div class="${"arrows svelte-5zlcny"}"><div class="${"arrow left svelte-5zlcny"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 448 512"}" class="${"svelte-5zlcny"}"><path d="${"M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"}"></path></svg></div>
      <div class="${"arrow  svelte-5zlcny"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 448 512"}" class="${"svelte-5zlcny"}"><path d="${"M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"}"></path></svg></div></div></div>
</div>`;
});
const css$2 = {
  code: ".pricebar.svelte-1lasuj6.svelte-1lasuj6{height:var(--bar-height);max-height:var(--bar-height);width:100vw;overflow:hidden;border-top:2px solid black;box-sizing:border-box;background-color:#f5f5f7;display:flex;align-items:center;justify-content:center;gap:1rem}.pricebar.svelte-1lasuj6 .container.svelte-1lasuj6{display:flex;flex-direction:column;align-items:center;justify-content:center;width:fit-content;min-width:fit-content;font-size:small;flex:1}.pricebar.svelte-1lasuj6 .container svg.svelte-1lasuj6{width:2rem;height:2rem}.pricebar.svelte-1lasuj6 .container .text.svelte-1lasuj6{color:rgba(0, 0, 0, 0.46);text-align:center}.pricebar.svelte-1lasuj6 .consegna.svelte-1lasuj6{min-width:fit-content}.pricebar.svelte-1lasuj6 .tempistica.svelte-1lasuj6{min-width:fit-content}.pricebar.svelte-1lasuj6 .prezzo.svelte-1lasuj6{font-size:xx-large;font-weight:bold;width:6rem;min-width:6rem;align-items:flex-start}.pricebar.svelte-1lasuj6 .ordina.svelte-1lasuj6{cursor:pointer}.pricebar.svelte-1lasuj6 .ordina .button.svelte-1lasuj6{text-align:center;padding:1rem 2rem;border-radius:0.5rem;font-size:large;color:#0085ff;background-color:white;border:2px solid #0085ff;transition:background-color 0.2s ease-in-out, color 0.2s ease-in-out}.pricebar.svelte-1lasuj6 .ordina:hover .button.svelte-1lasuj6{color:white;background-color:#0085ff}@media(max-width: 768px){.pricebar.svelte-1lasuj6.svelte-1lasuj6{padding:0 2rem;overflow-y:hidden}.pricebar.svelte-1lasuj6 .desktop-only.svelte-1lasuj6{display:none}.pricebar.svelte-1lasuj6 .container.svelte-1lasuj6{flex:1;width:fit-content;min-width:fit-content}.pricebar.svelte-1lasuj6 .ordina .button.svelte-1lasuj6{border-radius:0.5rem;width:fit-content;font-size:small}}",
  map: null
};
const PriceBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tampone } = $$props;
  let { add_to_cart } = $$props;
  let valore_corrente = tampone.costo;
  let updater = null;
  let timeout = null;
  function run_updater(_) {
    if (updater)
      clearInterval(updater);
    updater = setInterval(
      () => {
        if (valore_corrente === tampone.costo) {
          clearInterval(updater);
          updater = null;
        } else {
          valore_corrente += Math.sign(tampone.costo - valore_corrente);
        }
      },
      20
    );
    if (timeout)
      clearTimeout(timeout);
    timeout = setTimeout(
      () => {
        if (updater) {
          clearInterval(updater);
          updater = null;
          clearTimeout(timeout);
          timeout = null;
        }
        valore_corrente = tampone.costo;
      },
      1e3
    );
  }
  if ($$props.tampone === void 0 && $$bindings.tampone && tampone !== void 0)
    $$bindings.tampone(tampone);
  if ($$props.add_to_cart === void 0 && $$bindings.add_to_cart && add_to_cart !== void 0)
    $$bindings.add_to_cart(add_to_cart);
  $$result.css.add(css$2);
  {
    {
      run_updater();
    }
  }
  return `
<div class="${"pricebar svelte-1lasuj6"}"><div class="${"spacer-1"}"></div>
  <div class="${"container consegna desktop-only svelte-1lasuj6"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 640 512"}" class="${"svelte-1lasuj6"}"><path d="${"M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"}"></path></svg>
    <div class="${"text cut svelte-1lasuj6"}">consegna gratuita garantita</div>
    <div class="${"link "}">guarda le tempistiche</div></div>
  <div class="${"container tempistica desktop-only svelte-1lasuj6"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 640 512"}" class="${"svelte-1lasuj6"}"><path d="${"M45.9 42.1c3-6.1 9.6-9.6 16.3-8.7L307 64 551.8 33.4c6.7-.8 13.3 2.7 16.3 8.7l41.7 83.4c9 17.9-.6 39.6-19.8 45.1L426.6 217.3c-13.9 4-28.8-1.9-36.2-14.3L307 64 223.6 203c-7.4 12.4-22.3 18.3-36.2 14.3L24.1 170.6C4.8 165.1-4.7 143.4 4.2 125.5L45.9 42.1zM308.1 128l54.9 91.4c14.9 24.8 44.6 36.6 72.5 28.6L563 211.6v167c0 22-15 41.2-36.4 46.6l-204.1 51c-10.2 2.6-20.9 2.6-31 0l-204.1-51C66 419.7 51 400.5 51 378.5v-167L178.6 248c27.8 8 57.6-3.8 72.5-28.6L305.9 128h2.2z"}"></path></svg>
    <div class="${"text cut svelte-1lasuj6"}">politica di reso</div>
    <div class="${"link "}">guarda le tempistiche</div></div>
  <div class="${"spacer-5 desktop-only svelte-1lasuj6"}"></div>
  <div class="${"container prezzo svelte-1lasuj6"}">€${escape(valore_corrente)}</div>
  <div class="${"container ordina noselect svelte-1lasuj6"}"><div class="${"button svelte-1lasuj6"}">Ordina subito!</div></div>
  <div class="${"spacer-1"}"></div>
</div>`;
});
let Model_db = [
  { marca: "Skoda", modello: "A4", anno: 2019 },
  { marca: "Audi", modello: "4", anno: 2019 },
  { marca: "Bmw", modello: "2", anno: 2019 },
  { marca: "Skoda", modello: "1", anno: 2023 }
];
const MARCHE = ["Audi", "Bmw", "Skoda"];
const MODELLO = ["A4", "4", "2"];
const ANNO = [2019, 2020, 2021];
const css$1 = {
  code: ".selector-box.svelte-8l6a40.svelte-8l6a40{--selector-width:100%;width:var(--selector-width);height:4rem;display:flex;flex-direction:column;gap:1rem}.selector-box.svelte-8l6a40 .selected.svelte-8l6a40{border:2px solid rgb(191, 191, 191);border-radius:0.6rem;display:flex;justify-content:space-between;align-items:center;gap:1rem;padding:2%}.selector-box.svelte-8l6a40 .selected .text.svelte-8l6a40{color:grey;font-size:large}.selector-box.svelte-8l6a40 .selected .arrow.svelte-8l6a40{display:flex;align-self:center;justify-content:center;align-items:center}.selector-box.svelte-8l6a40 .selected .arrow svg.svelte-8l6a40{width:2rem;height:2rem;transform:rotate(180deg);transition:transform 0.2s ease}.selector-box.svelte-8l6a40 .selected.active .arrow svg.svelte-8l6a40{transform:rotate(0deg)}.selector-box.svelte-8l6a40 .options.svelte-8l6a40{border:2px solid rgb(191, 191, 191);border-radius:0.6rem;background-color:white;display:flex;gap:1rem;padding:2%;transition:opacity 0.2s ease;position:relative;z-index:9999;display:flex;flex-direction:column}.selector-box.svelte-8l6a40 .options .divider.svelte-8l6a40{width:100%;height:1px;background-color:rgb(184, 184, 184)}.selector-box.svelte-8l6a40 .options .item.svelte-8l6a40{height:2rem;display:flex;justify-content:center;align-items:center;padding:0.5rem}.selector-box.svelte-8l6a40 .options.svelte-8l6a40:not(.active){z-index:-1;opacity:0}",
  map: null
};
const ModelSelector = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tipo } = $$props;
  let { marca } = $$props;
  let { modello } = $$props;
  let { anno } = $$props;
  let { options } = $$props;
  if ($$props.tipo === void 0 && $$bindings.tipo && tipo !== void 0)
    $$bindings.tipo(tipo);
  if ($$props.marca === void 0 && $$bindings.marca && marca !== void 0)
    $$bindings.marca(marca);
  if ($$props.modello === void 0 && $$bindings.modello && modello !== void 0)
    $$bindings.modello(modello);
  if ($$props.anno === void 0 && $$bindings.anno && anno !== void 0)
    $$bindings.anno(anno);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  $$result.css.add(css$1);
  return `
<div class="${"selector-box svelte-8l6a40"}"><div class="${["selected svelte-8l6a40", ""].join(" ").trim()}"><div class="${"text svelte-8l6a40"}">${escape(tipo)}:  
    ${``}
    ${``}</div>
    <div class="${"arrow svelte-8l6a40"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 24 24"}" class="${"svelte-8l6a40"}"><title>chevron-down</title><path d="${"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"}"></path></svg></div></div>
  <div class="${["options svelte-8l6a40", ""].join(" ").trim()}">${each(options, (option, index) => {
    return `<div class="${"item svelte-8l6a40"}">${escape(options[index])}</div>
      ${index < options.length - 1 ? `<div class="${"divider svelte-8l6a40"}"></div>` : ``}`;
  })}</div>
</div>`;
});
const css = {
  code: '.acquista.svelte-37b39p.svelte-37b39p{--bar-height:5rem;display:flex;flex-direction:column;height:100%}.acquista.svelte-37b39p .content.svelte-37b39p{height:calc(100% - var(--bar-height));display:flex;flex:1}.acquista.svelte-37b39p .content .display.svelte-37b39p{flex:1;display:grid;grid-template-columns:1fr;grid-template-rows:1fr 4rem 4rem;grid-template-areas:"position" "galleria" "info";padding:4rem 0 4rem 0;box-sizing:border-box}.acquista.svelte-37b39p .content .display .grid-container.svelte-37b39p{display:flex;justify-content:center;align-items:center;width:100%;height:100%}.acquista.svelte-37b39p .content .display .position-container.svelte-37b39p{grid-area:position}.acquista.svelte-37b39p .content .display .galleria-container.svelte-37b39p{grid-area:galleria}.acquista.svelte-37b39p .content .display .info-container.svelte-37b39p{grid-area:info}.acquista.svelte-37b39p .content .display .galleria.svelte-37b39p{grid-area:galleria;color:#0085ff;cursor:pointer;z-index:1;background-color:rgba(255, 255, 255, 0.6);backdrop-filter:blur(2px);padding:0.5rem 1rem;border-radius:0.5rem;width:fit-content}.acquista.svelte-37b39p .content .display .info.svelte-37b39p{grid-area:info;font-size:small;text-align:center;color:var(--color-var0);z-index:1;background-color:rgba(255, 255, 255, 0.6);backdrop-filter:blur(2px);padding:0.5rem 1rem;border-radius:0.5rem;width:fit-content}.acquista.svelte-37b39p .content .display .info span.svelte-37b39p{color:var(--color-var2)}.acquista.svelte-37b39p .content .display .position.svelte-37b39p{grid-area:position;position:relative;max-height:0px;background-color:red;pointer-events:none}.acquista.svelte-37b39p .content .display .position .render-container.svelte-37b39p{position:absolute;left:-350px;top:-500px;width:700px;height:1000px;display:flex;justify-content:center;align-items:center}.acquista.svelte-37b39p .content .form.svelte-37b39p{flex:1;padding:2rem;overflow-y:scroll;display:flex;flex-direction:column;gap:1.5rem}.acquista.svelte-37b39p .content .form .incisione-text.svelte-37b39p{width:8rem;height:2rem;border-radius:0.4rem;padding:0.3rem;border:1px solid rgb(185, 185, 185);text-align:center}.acquista.svelte-37b39p .content .form .divider.svelte-37b39p{min-height:0.1rem;max-height:0.1rem;background-color:black}.acquista.svelte-37b39p .content .form .titolo.svelte-37b39p{font-size:xx-large;font-weight:600}.acquista.svelte-37b39p .content .form .sub-titolo.svelte-37b39p{color:var(--color-var1)}.acquista.svelte-37b39p .content .form .header.svelte-37b39p{color:var(--color-var3);font-size:large}.acquista.svelte-37b39p .content .form .model-selection-box.svelte-37b39p{display:flex;align-items:flex-start;justify-content:center;flex-direction:column;gap:2rem;padding:0rem}.acquista.svelte-37b39p .content .form .listamodelli.svelte-37b39p{display:flex;min-height:calc(100% - 50vh);border:grey solid 1px;border-radius:0.4rem;display:flex;flex-direction:column;gap:1rem;padding:1rem;flex:1}.acquista.svelte-37b39p .content .form .listamodelli .divider.svelte-37b39p{align-self:center;min-height:0.1rem;min-width:30rem;background-color:rgb(203, 203, 203)}.acquista.svelte-37b39p .content .form .item_.svelte-37b39p{height:1rem;display:flex;justify-content:center;align-items:center;padding:1rem;border-radius:0.4rem;border-width:2px;border:solid white 2px}.acquista.svelte-37b39p .content .form .item_.svelte-37b39p:hover{transition:border ease 0.5s;border-width:2px;border-color:#0085ff;cursor:pointer}@media(max-width: 768px){.acquista.svelte-37b39p .content.svelte-37b39p{flex-direction:column;overflow-y:scroll}.acquista.svelte-37b39p .content .display.svelte-37b39p{padding:0;min-height:15rem;grid-template-rows:1fr 1rem 1fr;grid-template-areas:"galleria" "position" "info"}.acquista.svelte-37b39p .content .display .position .render-container.svelte-37b39p{left:-200px;top:-300px;width:400px;height:600px}.acquista.svelte-37b39p .content .form.svelte-37b39p{overflow-y:visible}.acquista.svelte-37b39p .content .form .incisione-text.svelte-37b39p{flex:1;width:4rem;height:2rem;border-radius:0.4rem;padding:0.3rem;border:1px solid rgb(185, 185, 185);text-align:center}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let render_container;
  let incisione_text = data.tampone.incisione;
  let gallery_active = false;
  let tampone = data.tampone;
  let marca;
  let modello;
  let anno;
  let lista_modelli = Model_db;
  function add_to_cart() {
    add_item_to_cart(tampone);
    goto("/frame_site/carrello");
  }
  function select_appendice(appendice) {
    if (appendice in AppendiceTamponeInfo) {
      tampone.appendice = appendice;
      tampone = tampone;
    }
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        incisione_text = incisione_text.toUpperCase();
        if (incisione_text.length > 3) {
          incisione_text = incisione_text.slice(0, 3);
        }
        if (marca != void 0) {
          lista_modelli = Model_db.filter((item) => item.marca == marca);
        }
        if (modello != void 0) {
          lista_modelli = Model_db.filter((item) => item.modello == modello);
        }
        if (anno != void 0) {
          lista_modelli = Model_db.filter((item) => item.anno == anno);
        }
      }
    }
    $$rendered = `

<div class="${"acquista svelte-37b39p"}">${validate_component(Galleria, "Galleria").$$render(
      $$result,
      {
        close_gallery: () => {
          gallery_active = false;
        },
        gallery_active
      },
      {},
      {}
    )}
  <div class="${"content svelte-37b39p"}"><div class="${"display svelte-37b39p"}"><div class="${"grid-container position-container svelte-37b39p"}"><div class="${"position svelte-37b39p"}">
          <div class="${"render-container svelte-37b39p"}"${add_attribute("this", render_container, 0)}></div></div></div>
      <div class="${"grid-container galleria-container svelte-37b39p"}"><div class="${"galleria link svelte-37b39p"}">Galleria
        </div></div>
      <div class="${"grid-container info-container svelte-37b39p"}"><div class="${"info svelte-37b39p"}">hai qualche <span class="${"svelte-37b39p"}">domanda?</span>
          scrivi a questo numero<br> +3987223423
        </div></div></div>
    <div class="${"form svelte-37b39p"}"><div class="${"titolo svelte-37b39p"}">Personalizza il tuo componente</div>
      <div class="${"sub-titolo svelte-37b39p"}">qui puoi scegliere</div>

      <div class="${"divider svelte-37b39p"}"></div>
      <div class="${"header svelte-37b39p"}">Incisione personalizzata</div>
      ${validate_component(ShopButton, "ShopButton").$$render(
      $$result,
      {
        label: IncisioneTamponeInfo(incisione_text).label,
        cost: IncisioneTamponeInfo(incisione_text).costo,
        selected: incisione_text !== "",
        no_pointer: true,
        no_hover: true
      },
      {},
      {
        default: () => {
          return `<input class="${"incisione-text svelte-37b39p"}" type="${"text"}" placeholder="${"Max 3 caratteri"}"${add_attribute("value", incisione_text, 0)}>`;
        }
      }
    )}
      <div class="${"divider svelte-37b39p"}"></div>
      <div class="${"header svelte-37b39p"}">Appendice personalizzata:</div>
      ${each(Object.entries(AppendiceTamponeInfo), ([key, appendice]) => {
      return `${validate_component(ShopButton, "ShopButton").$$render(
        $$result,
        {
          label: appendice.label,
          cost: appendice.costo,
          selected: key === tampone.appendice,
          onClick: () => select_appendice(key)
        },
        {},
        {}
      )}`;
    })}
      <div class="${"divider svelte-37b39p"}"></div>
      <div class="${"header svelte-37b39p"}">Modello moto:</div>
      <div class="${"spacer-10"}"></div>
      
      <div class="${"model-selection-box svelte-37b39p"}">${validate_component(ModelSelector, "ModelSelector").$$render(
      $$result,
      { options: MARCHE, tipo: "Marca", marca },
      {
        marca: ($$value) => {
          marca = $$value;
          $$settled = false;
        }
      },
      {}
    )}
        ${validate_component(ModelSelector, "ModelSelector").$$render(
      $$result,
      {
        options: MODELLO,
        tipo: "Modello",
        modello
      },
      {
        modello: ($$value) => {
          modello = $$value;
          $$settled = false;
        }
      },
      {}
    )}
        ${validate_component(ModelSelector, "ModelSelector").$$render(
      $$result,
      { options: ANNO, tipo: "Anno", anno },
      {
        anno: ($$value) => {
          anno = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
      <div class="${"spacer-9"}"></div>
      <div class="${"listamodelli svelte-37b39p"}">${each(lista_modelli, (lista, index) => {
      return `<div class="${"item_ svelte-37b39p"}">${escape(lista.marca)} ${escape(lista.modello)} ${escape(lista.anno)}</div>
        ${lista.length < -1 ? `<div class="${"divider svelte-37b39p"}"></div>` : ``}`;
    })}</div>
    </div></div>
  ${validate_component(PriceBar, "PriceBar").$$render($$result, { tampone, add_to_cart }, {}, {})}
</div>`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-a9046ef0.js.map
