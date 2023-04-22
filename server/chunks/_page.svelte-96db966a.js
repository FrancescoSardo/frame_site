import { c as create_ssr_component, v as validate_component, e as escape, d as each } from './index2-6e589ef6.js';

const css$1 = {
  code: ".selector.svelte-1ixysry.svelte-1ixysry{--selector-width:12rem;z-index:10000;width:var(--selector-width);height:4rem;background-color:white;position:relative;cursor:pointer;display:flex;text-align:center;justify-content:center}.selector.svelte-1ixysry .selected.svelte-1ixysry{display:grid;width:100%;grid-template-columns:1fr 3rem;grid-template-rows:1fr;text-align:center;border:2px solid rgb(184, 184, 184);border-radius:0.5rem}.selector.svelte-1ixysry .selected .svelte-1ixysry{display:flex;text-align:center;justify-content:center;align-items:center;grid-row:1}.selector.svelte-1ixysry .selected .text.svelte-1ixysry{grid-column:1/3}.selector.svelte-1ixysry .selected .arrow.svelte-1ixysry{grid-column:2;width:100%;height:100%}.selector.svelte-1ixysry .selected .arrow svg.svelte-1ixysry{width:2rem;height:2rem;transition:transform 0.2s ease}.selector.svelte-1ixysry .selected.active.svelte-1ixysry{background-color:rgb(240, 240, 240)}.selector.svelte-1ixysry .selected.active .arrow svg.svelte-1ixysry{transform:rotate(180deg)}.selector.svelte-1ixysry .options.svelte-1ixysry{z-index:10000;transition:opacity 0.2s ease;opacity:1;display:flex;flex-direction:column;position:absolute;top:4.5rem;left:0;background-color:white;border:2px solid rgb(184, 184, 184);box-sizing:border-box;width:var(--selector-width);border-radius:0.5rem;overflow:hidden}.selector.svelte-1ixysry .options .divider.svelte-1ixysry{width:100%;height:1px;background-color:rgb(184, 184, 184)}.selector.svelte-1ixysry .options .item.svelte-1ixysry{z-index:1000;height:2rem;display:flex;justify-content:center;align-items:center;background-color:white;padding:0.5rem}.selector.svelte-1ixysry .options .item.svelte-1ixysry:hover{background-color:rgb(240, 240, 240)}.selector.svelte-1ixysry .options.svelte-1ixysry:not(.active){opacity:0}@media(max-width: 768px){.selector.svelte-1ixysry.svelte-1ixysry{--selector-width:8rem}.selector.svelte-1ixysry .svelte-1ixysry{font-size:0.8rem}.selector.svelte-1ixysry .selected.svelte-1ixysry{grid-template-columns:1fr 2rem}.selector.svelte-1ixysry .selected .text.svelte-1ixysry{grid-column:1}}",
  map: null
};
const Selector = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selected = 0;
  let { options = [] } = $$props;
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  $$result.css.add(css$1);
  return `
<div class="${"selector svelte-1ixysry"}"><div class="${["selected noselect svelte-1ixysry", ""].join(" ").trim()}"><div class="${"text svelte-1ixysry"}">${escape(options[selected].label)}</div>
    <div class="${"arrow svelte-1ixysry"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 24 24"}" class="${"svelte-1ixysry"}"><title class="${"svelte-1ixysry"}">chevron-down</title><path d="${"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"}" class="${"svelte-1ixysry"}"></path></svg></div></div>
  <div class="${["options svelte-1ixysry", ""].join(" ").trim()}">${each(options, (option, index) => {
    return `<div class="${"item svelte-1ixysry"}">${escape(option.label)}</div>
      ${index < options.length - 1 ? `<div class="${"divider svelte-1ixysry"}"></div>` : ``}`;
  })}</div>
</div>`;
});
const css = {
  code: ".confronta.svelte-8wsg36.svelte-8wsg36{display:flex;width:100%;height:150vh;overflow-y:scroll;flex-direction:column}.confronta.svelte-8wsg36 .testo.svelte-8wsg36{display:flex;flex-direction:column;width:100vw;height:50vh;text-align:center;justify-content:center;align-items:center}.confronta.svelte-8wsg36 .testo .h1.svelte-8wsg36{font-size:3rem}.confronta.svelte-8wsg36 .testo .h2.svelte-8wsg36{color:grey}.confronta.svelte-8wsg36 .content.svelte-8wsg36{display:flex;flex-direction:row;width:100vw;height:100vh}.confronta.svelte-8wsg36 .content .right.svelte-8wsg36{margin-top:20px;flex:1;height:100vh;gap:1rem;display:flex;align-items:center;flex-direction:column}.confronta.svelte-8wsg36 .content .right .image.svelte-8wsg36{width:15rem;height:15rem;background-color:green;border-radius:20%}.confronta.svelte-8wsg36 .content .right .material-content.svelte-8wsg36{display:flex;gap:1rem}.confronta.svelte-8wsg36 .content .right .material-content .material.svelte-8wsg36{display:flex;flex-direction:column;align-items:center}.confronta.svelte-8wsg36 .content .right .material-content .material .circle.svelte-8wsg36{width:2rem;height:2rem;background-color:black;border-radius:50%}.confronta.svelte-8wsg36 .content .right .line.svelte-8wsg36{max-width:15rem;background-color:grey}.confronta.svelte-8wsg36 .content .right .content-box.svelte-8wsg36{display:flex;flex-direction:column;align-items:center;gap:1rem}.confronta.svelte-8wsg36 .content .right .content-box .button.svelte-8wsg36{width:5rem;text-align:center;user-select:none;cursor:pointer;border-radius:1rem;font-size:small;box-sizing:border-box;padding:0.2rem;color:#0085ff;background-color:white;border:2px solid #0085ff;transition:background-color 0.2s ease-in-out, color 0.2s ease-in-out;font-weight:bold}.confronta.svelte-8wsg36 .content .right .content-box .button.svelte-8wsg36:hover{background-color:#0085ff;color:white}.confronta.svelte-8wsg36 .content .right .content-box .text.svelte-8wsg36{color:grey}.confronta.svelte-8wsg36 .content .right .content-tec.svelte-8wsg36{display:flex;text-align:left;width:100%}.confronta.svelte-8wsg36 .content .right .content-tec .cc.svelte-8wsg36{flex:5;display:flex;flex-direction:column;text-align:left;width:100%;color:white}.confronta.svelte-8wsg36 .content .right .content-tec .cc .line.svelte-8wsg36{max-width:45vw;height:30px;background-color:grey}.confronta.svelte-8wsg36 .content .right .content-tec .cc .text.svelte-8wsg36{font-size:x-large}.confronta.svelte-8wsg36 .content .right .img.svelte-8wsg36{background-color:grey;width:100px;height:100px;border-radius:20%}.confronta.svelte-8wsg36 .content .left.svelte-8wsg36{margin-top:20px;flex:1;height:100vh;display:flex;align-items:center;flex-direction:column;gap:1rem;overflow-x:scroll}.confronta.svelte-8wsg36 .content .left .image.svelte-8wsg36{width:15rem;height:15rem;background-color:red;border-radius:20%}.confronta.svelte-8wsg36 .content .left .material-content.svelte-8wsg36{display:flex;gap:1rem}.confronta.svelte-8wsg36 .content .left .material-content .material.svelte-8wsg36{display:flex;flex-direction:column;align-items:center}.confronta.svelte-8wsg36 .content .left .material-content .material .circle.svelte-8wsg36{width:2rem;height:2rem;background-color:black;border-radius:50%}.confronta.svelte-8wsg36 .content .left .line.svelte-8wsg36{max-width:15rem;background-color:grey}.confronta.svelte-8wsg36 .content .left .content-box.svelte-8wsg36{display:flex;flex-direction:column;align-items:center;gap:1rem}.confronta.svelte-8wsg36 .content .left .content-box .button.svelte-8wsg36{width:5rem;text-align:center;user-select:none;cursor:pointer;border-radius:1rem;font-size:small;box-sizing:border-box;padding:0.2rem;color:#0085ff;background-color:white;border:2px solid #0085ff;transition:background-color 0.2s ease-in-out, color 0.2s ease-in-out;font-weight:bold}.confronta.svelte-8wsg36 .content .left .content-box .button.svelte-8wsg36:hover{background-color:#0085ff;color:white}.confronta.svelte-8wsg36 .content .left .content-box .text.svelte-8wsg36{color:grey}.confronta.svelte-8wsg36 .content .left .content-tec.svelte-8wsg36{display:flex;text-align:left;width:100%}.confronta.svelte-8wsg36 .content .left .content-tec .cc.svelte-8wsg36{flex:5;display:flex;flex-direction:column;text-align:left;width:100%}.confronta.svelte-8wsg36 .content .left .content-tec .cc .line.svelte-8wsg36{width:100vw;max-width:45vw;height:3px;background-color:grey}.confronta.svelte-8wsg36 .content .left .content-tec .cc .text.svelte-8wsg36{font-size:x-large}.confronta.svelte-8wsg36 .content .left .img.svelte-8wsg36{background-color:grey;width:100px;height:100px;border-radius:20%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"confronta svelte-8wsg36"}"><div class="${"testo svelte-8wsg36"}"><div class="${"h1 svelte-8wsg36"}">Confronta i modelli</div>
    <div class="${"h2 svelte-8wsg36"}">ti serve un consiglio? manda un messaggio a questo numero +39 349302390
    </div></div>
  <div class="${"content svelte-8wsg36"}"><div class="${"left svelte-8wsg36"}">${validate_component(Selector, "Selector").$$render(
    $$result,
    {
      options: [
        {
          label: "Specchietto",
          value: "specchietto"
        },
        { label: "Tamponi", value: "tamponi" },
        { label: "Tamponi", value: "tamponi" },
        { label: "Tamponi", value: "tamponi" }
      ]
    },
    {},
    {}
  )}
      <div class="${"image svelte-8wsg36"}"></div>

      <div class="${"material-content svelte-8wsg36"}"><div class="${"material svelte-8wsg36"}"><div class="${"circle svelte-8wsg36"}"></div>
          <div class="${"text svelte-8wsg36"}">Carbonio</div></div>
     </div>

      <div class="${"line svelte-8wsg36"}"></div>

      <div class="${"content-box svelte-8wsg36"}"><div class="${"text svelte-8wsg36"}">a partire da</div>
        <div class="${"price"}">99$</div>
        <div class="${"button svelte-8wsg36"}">acquista</div></div>

      <div class="${"content-tec svelte-8wsg36"}"><div class="${"spacer-1"}"></div>
        <div class="${"cc svelte-8wsg36"}"><div class="${"text svelte-8wsg36"}">A livello tecnico</div>
          <div class="${"line svelte-8wsg36"}"></div></div></div>
      <div class="${"img svelte-8wsg36"}"></div>
      <div class="${"img svelte-8wsg36"}"></div>
      <div class="${"content-tec svelte-8wsg36"}"><div class="${"spacer-1"}"></div>
        <div class="${"cc svelte-8wsg36"}"><div class="${"text svelte-8wsg36"}">A livello di design</div>
          <div class="${"line svelte-8wsg36"}"></div></div></div>
      <div class="${"img svelte-8wsg36"}"></div>
      <div class="${"img svelte-8wsg36"}"></div></div>

    <div class="${"right svelte-8wsg36"}">${validate_component(Selector, "Selector").$$render(
    $$result,
    {
      options: [
        {
          label: "Specchietto",
          value: "specchietto"
        },
        { label: "Tamponi", value: "tamponi" },
        { label: "Tamponi", value: "tamponi" },
        { label: "Tamponi", value: "tamponi" }
      ]
    },
    {},
    {}
  )}
      
      
      <div class="${"image svelte-8wsg36"}"></div>

      <div class="${"material-content svelte-8wsg36"}"><div class="${"material svelte-8wsg36"}"><div class="${"circle svelte-8wsg36"}"></div>
          <div class="${"text svelte-8wsg36"}">Carbonio</div></div>
    </div>

      <div class="${"line svelte-8wsg36"}"></div>

      <div class="${"content-box svelte-8wsg36"}"><div class="${"text svelte-8wsg36"}">a partire da</div>
        <div class="${"price"}">99$</div>
        <div class="${"button svelte-8wsg36"}">acquista</div></div>

      <div class="${"content-tec svelte-8wsg36"}"><div class="${"cc svelte-8wsg36"}"><div class="${"text svelte-8wsg36"}">A livello tecnico</div>
          <div class="${"line svelte-8wsg36"}"></div></div>
        <div class="${"spacer-1"}"></div></div>
      <div class="${"img svelte-8wsg36"}"></div>
      <div class="${"img svelte-8wsg36"}"></div>
      <div class="${"content-tec svelte-8wsg36"}"><div class="${"cc svelte-8wsg36"}"><div class="${"text svelte-8wsg36"}">A livello tecnico</div>
          <div class="${"line svelte-8wsg36"}"></div></div>
        <div class="${"spacer-1"}"></div></div>
      <div class="${"img svelte-8wsg36"}"></div>
      <div class="${"img svelte-8wsg36"}"></div></div></div>
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-96db966a.js.map
