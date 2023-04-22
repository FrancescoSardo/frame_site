import { c as create_ssr_component, d as each, v as validate_component, e as escape, b as add_attribute } from './index2-6e589ef6.js';
import { r as reneder_shark } from './render_shark-79f23b93.js';
import './cart-cb3249bf.js';
import { T as Tampone } from './shop-d8bec1b9.js';
import './index-b0bac5bf.js';

const css$1 = {
  code: '.item.svelte-gjm9yh.svelte-gjm9yh{display:flex;margin:0 3rem}.item.svelte-gjm9yh .card.svelte-gjm9yh{flex:1;padding:1rem;box-sizing:border-box;height:12rem;display:grid;grid-template-columns:3fr 2fr;grid-template-rows:2fr 1fr;gap:1.5rem;border:2px solid gray;border-radius:0.5rem}.item.svelte-gjm9yh .card .scopri-container.svelte-gjm9yh{display:none}.item.svelte-gjm9yh .card .image-container.svelte-gjm9yh{grid-column:2;grid-row:1/3;padding:0.5rem}.item.svelte-gjm9yh .card .image-container .image.svelte-gjm9yh{width:100%;height:100%;object-fit:contain}.item.svelte-gjm9yh .card .info.svelte-gjm9yh{grid-column:1;grid-row:1;display:flex;flex-direction:column;justify-content:space-around}.item.svelte-gjm9yh .card .info .item-type.svelte-gjm9yh{font-weight:600;font-size:1.2rem}.item.svelte-gjm9yh .card .info .info-row.svelte-gjm9yh{display:flex;gap:0.5rem}.item.svelte-gjm9yh .card .info .info-row .label.svelte-gjm9yh{color:gray}.item.svelte-gjm9yh .card .prezzo.svelte-gjm9yh{grid-column:1;grid-row:2}.item.svelte-gjm9yh .card .prezzo .text.svelte-gjm9yh{color:gray}.item.svelte-gjm9yh .card .prezzo .value.svelte-gjm9yh{font-weight:600;font-size:1.1rem}.item.svelte-gjm9yh .actions.svelte-gjm9yh{width:2rem;display:flex;flex-direction:column;justify-content:center;gap:1rem;padding:1rem 0.3rem;box-sizing:border-box}.item.svelte-gjm9yh .actions .btn.svelte-gjm9yh{cursor:pointer;fill:black;transition:fill 0.2s ease-in-out}.item.svelte-gjm9yh .actions .btn.svelte-gjm9yh:hover{fill:#0085ff}.newitem.svelte-gjm9yh .card.svelte-gjm9yh{position:relative;overflow:hidden}.newitem.svelte-gjm9yh .card.svelte-gjm9yh::before{content:"";position:absolute;height:100%;width:100%;background-color:rgba(255, 255, 255, 0.5);backdrop-filter:blur(5px);transition:background-color 0.2s ease-in-out, backdrop-filter 0.2s ease-in-out}.newitem.svelte-gjm9yh .card .scopri-container.svelte-gjm9yh{position:absolute;height:100%;width:100%;display:flex;align-items:center;justify-content:center;cursor:pointer}.newitem.svelte-gjm9yh .card .scopri-container .scopri.svelte-gjm9yh{padding:0.2rem 1rem;display:flex;align-items:center;justify-content:center;color:#0085ff;border:2px solid #0085ff;border-radius:6rem;transition:background-color 0.2s ease-in-out, color 0.2s ease-in-out}.newitem.svelte-gjm9yh .card.svelte-gjm9yh:hover::before{background-color:rgba(255, 255, 255, 0.3);backdrop-filter:blur(4px)}.newitem.svelte-gjm9yh .card:hover .scopri-container .scopri.svelte-gjm9yh{background-color:#0085ff;color:white}.newitem.svelte-gjm9yh .actions.svelte-gjm9yh{opacity:0;transition:opacity 0.2s ease-in-out}',
  map: null
};
const CartItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tampone } = $$props;
  let { image = "" } = $$props;
  let { newitem = false } = $$props;
  if ($$props.tampone === void 0 && $$bindings.tampone && tampone !== void 0)
    $$bindings.tampone(tampone);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.newitem === void 0 && $$bindings.newitem && newitem !== void 0)
    $$bindings.newitem(newitem);
  $$result.css.add(css$1);
  return `
<div class="${["item svelte-gjm9yh", newitem ? "newitem" : ""].join(" ").trim()}"><div class="${"card svelte-gjm9yh"}"><div class="${"scopri-container svelte-gjm9yh"}"><div class="${"scopri svelte-gjm9yh"}">aggiungi articolo</div></div>
    <div class="${"image-container svelte-gjm9yh"}"><img class="${"image svelte-gjm9yh"}"${add_attribute("src", image, 0)} alt="${""}"></div>
    <div class="${"info display svelte-gjm9yh"}"><div class="${"item-type svelte-gjm9yh"}">Tampone</div>
      ${tampone.incisione != "" ? `<div class="${"info-row incisione svelte-gjm9yh"}"><div class="${"label svelte-gjm9yh"}">incisione:</div>
          <div class="${"value svelte-gjm9yh"}">${escape(tampone.incisione)}</div></div>` : ``}
      <div class="${"info-row appendice svelte-gjm9yh"}"><div class="${"label svelte-gjm9yh"}">appendice:</div>
        <div class="${"value svelte-gjm9yh"}">${escape(tampone.appendice)}</div></div>
      <div class="${"info-row modello svelte-gjm9yh"}"><div class="${"label svelte-gjm9yh"}">modello:</div>
        <div class="${"value svelte-gjm9yh"}">${escape(tampone.modello)}</div></div></div>
    <div class="${"prezzo display svelte-gjm9yh"}"><div class="${"text svelte-gjm9yh"}">Prezzo:</div>
      <div class="${"value svelte-gjm9yh"}">€${escape(tampone.costo)}</div></div></div>
  <div class="${"actions svelte-gjm9yh"}"><div class="${"btn edit svelte-gjm9yh"}"><svg viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><g id="${"SVGRepo_bgCarrier"}" stroke-width="${"0"}"></g><g id="${"SVGRepo_tracerCarrier"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></g><g id="${"SVGRepo_iconCarrier"}"><path fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"m3.99 16.854-1.314 3.504a.75.75 0 0 0 .966.965l3.503-1.314a3 3 0 0 0 1.068-.687L18.36 9.175s-.354-1.061-1.414-2.122c-1.06-1.06-2.122-1.414-2.122-1.414L4.677 15.786a3 3 0 0 0-.687 1.068zm12.249-12.63 1.383-1.383c.248-.248.579-.406.925-.348.487.08 1.232.322 1.934 1.025.703.703.945 1.447 1.025 1.934.058.346-.1.677-.348.925L19.774 7.76s-.353-1.06-1.414-2.12c-1.06-1.062-2.121-1.415-2.121-1.415z"}"></path></g></svg></div>
    <div class="${"btn remove svelte-gjm9yh"}"><svg version="${"1.1"}" id="${"_x32_"}" xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" viewBox="${"0 0 512 512"}" xml:space="${"preserve"}"><g id="${"SVGRepo_bgCarrier"}" stroke-width="${"0"}"></g><g id="${"SVGRepo_tracerCarrier"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></g><g id="${"SVGRepo_iconCarrier"}"><g><path class="${"st0"}" d="${"M410.886,43.93H301.533C299.778,19.793,280.576,0.093,256.005,0c-24.598,0.093-43.8,19.793-45.556,43.93 H101.115c-22.787,0-41.407,18.628-41.407,41.398v1.792v15.543v14.822c0,5.692,4.648,10.35,10.34,10.35h0.674l23.859,342.87 C96.152,493.408,116.075,512,138.853,512h75.745c22.76,0,60.027,0,82.814,0h75.726c22.769,0,42.701-18.592,44.281-41.296 l23.84-342.87h0.675c5.702,0,10.358-4.658,10.358-10.35v-14.822V87.12v-1.792C452.292,62.558,433.654,43.93,410.886,43.93z"}"></path></g></g></svg></div></div>
</div>`;
});
const css = {
  code: ".carrello.svelte-10exxn0.svelte-10exxn0{display:flex;align-items:center;justify-content:center;box-sizing:border-box;height:100%;max-height:100%}.carrello.svelte-10exxn0 .title.svelte-10exxn0{font-size:2rem;font-weight:600;display:flex;justify-content:center;align-items:center;box-sizing:border-box;height:10%}.carrello.svelte-10exxn0 .info.svelte-10exxn0{display:flex;text-align:center;color:gray;box-sizing:border-box;justify-content:center;height:10%}.carrello.svelte-10exxn0 .left.svelte-10exxn0{width:100%;max-width:40rem;height:100%;box-sizing:border-box}.carrello.svelte-10exxn0 .left .itemlist.svelte-10exxn0{display:flex;flex-direction:column;gap:1rem;box-sizing:border-box;max-height:80%;height:80%;min-height:80%;overflow-y:scroll}.carrello.svelte-10exxn0 .left .itemlist .empty.svelte-10exxn0{min-height:3rem}.carrello.svelte-10exxn0 .right.svelte-10exxn0{width:100%;max-width:30rem;height:100%;box-sizing:border-box;padding-bottom:1rem}.carrello.svelte-10exxn0 .right .input-content.svelte-10exxn0{height:80%;padding:0 2rem;display:flex;flex-direction:column;box-sizing:border-box;justify-content:space-between}.carrello.svelte-10exxn0 .right .input-content .cont.svelte-10exxn0{display:flex;flex-direction:column;gap:0.2rem}.carrello.svelte-10exxn0 .right .input-content input[type=text].svelte-10exxn0{border:none;border-radius:0.2rem;border:1px solid gray;background-color:transparent;color:black;font-size:medium;box-sizing:border-box;font-size:large;height:3rem}.carrello.svelte-10exxn0 .right .input-content .box.svelte-10exxn0{display:flex;box-sizing:border-box;gap:1rem;height:fit-content}.carrello.svelte-10exxn0 .right .input-content .box .side.svelte-10exxn0{flex:1}.carrello.svelte-10exxn0 .right .input-content .content-tot.svelte-10exxn0{display:flex;align-items:center}.carrello.svelte-10exxn0 .right .input-content .content-tot .button.svelte-10exxn0{width:15rem;text-align:center;user-select:none;cursor:pointer;padding:1rem 2rem;border-radius:0.5rem;font-size:large;box-sizing:border-box;color:#0085ff;background-color:white;border:2px solid #0085ff;transition:background-color 0.2s ease-in-out, color 0.2s ease-in-out;font-weight:bold}.carrello.svelte-10exxn0 .right .input-content .content-tot .button.svelte-10exxn0:hover{background-color:#0085ff;color:white}.carrello.svelte-10exxn0 .right .input-content .content-tot .text.svelte-10exxn0{font-weight:100;margin-right:0.5rem}.carrello.svelte-10exxn0 .right .input-content .content-tot .price.svelte-10exxn0{font-size:x-large;font-weight:bold}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let totale;
  let { data } = $$props;
  let items = data.items;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  totale = items.reduce(
    (acc, item) => {
      return acc + item.costo;
    },
    0
  );
  return `<div class="${"carrello svelte-10exxn0"}"><div class="${"spacer-1"}"></div>
  <div class="${"left svelte-10exxn0"}"><div class="${"title svelte-10exxn0"}">I tuoi articoli</div>
    <div class="${"info svelte-10exxn0"}">Qui puoi vedere tutti gli articoli che hai selezionato per l&#39;acquisto e le
      informazioni relative al tuo ordine.
    </div>
    <div class="${"itemlist no-navbar svelte-10exxn0"}">${each(items, (item) => {
    return `${validate_component(CartItem, "CartItem").$$render($$result, { tampone: item, image: reneder_shark }, {}, {})}`;
  })}
      ${validate_component(CartItem, "CartItem").$$render(
    $$result,
    {
      tampone: new Tampone("", "nessuna", "r6"),
      image: reneder_shark,
      newitem: true
    },
    {},
    {}
  )}
      <div class="${"empty svelte-10exxn0"}"></div></div></div>
  <div class="${"spacer-3"}"></div>
  <div class="${"right svelte-10exxn0"}"><div class="${"title svelte-10exxn0"}">info</div>
    <div class="${"info svelte-10exxn0"}">Dicci qualcosa su di te</div>
    <div class="${"input-content svelte-10exxn0"}"><div class="${"cont svelte-10exxn0"}"><div class="${"text svelte-10exxn0"}">Email</div>
        <input type="${"text"}" class="${"svelte-10exxn0"}"></div>
      <div class="${"cont svelte-10exxn0"}"><div class="${"text svelte-10exxn0"}">Telefono</div>
        <input type="${"text"}" class="${"svelte-10exxn0"}"></div>
      <div class="${"line"}"></div>
      <div class="${"cont svelte-10exxn0"}"><div class="${"text svelte-10exxn0"}">Indirizzo Postale</div>
        <input type="${"text"}" class="${"svelte-10exxn0"}"></div>

      <div class="${"box svelte-10exxn0"}"><div class="${"cont side svelte-10exxn0"}"><div class="${"text svelte-10exxn0"}">Cap</div>
          <input type="${"text"}" class="${"text svelte-10exxn0"}" maxlength="${"5"}"></div>

        <div class="${"cont side svelte-10exxn0"}"><div class="${"text svelte-10exxn0"}">Città</div>
          <input type="${"text"}" class="${"text svelte-10exxn0"}"></div></div>

      <div class="${"cont svelte-10exxn0"}"><div class="${"text svelte-10exxn0"}">Note</div>
        <input type="${"text"}" class="${"svelte-10exxn0"}"></div>

      <div class="${"line"}"></div>
      
      <div class="${"content-tot svelte-10exxn0"}"><div class="${"button svelte-10exxn0"}">Acquista</div>
        <div class="${"spacer-1"}"></div>
        <div class="${"text svelte-10exxn0"}">Totale:</div>
        <div class="${"price svelte-10exxn0"}">€${escape(totale)}</div></div></div></div>
  <div class="${"spacer-1"}"></div>
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-cfaf766d.js.map
