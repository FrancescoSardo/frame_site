import { g as get_cart } from './cart-cb3249bf.js';
import './index-b0bac5bf.js';
import './index2-6e589ef6.js';

const load = ({ params }) => {
  let items = get_cart();
  return {
    items
  };
};

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 3;
const component = async () => (await import('./_page.svelte-cfaf766d.js')).default;
const file = '_app/immutable/entry/carrello-page.svelte.72cde6f3.js';
const universal_id = "src/routes/carrello/+page.ts";
const imports = ["_app/immutable/entry/carrello-page.svelte.72cde6f3.js","_app/immutable/chunks/index.7c4a083c.js","_app/immutable/chunks/render_shark.d15f51cb.js","_app/immutable/chunks/navigation.8f4a1d68.js","_app/immutable/chunks/singletons.31119692.js","_app/immutable/chunks/index.d5d36601.js","_app/immutable/chunks/cart.6367c23a.js","_app/immutable/chunks/shop.ad47193c.js","_app/immutable/chunks/tampone.e1c058f1.js","_app/immutable/entry/carrello-page.ts.6c3eb3c7.js","_app/immutable/chunks/cart.6367c23a.js","_app/immutable/chunks/index.d5d36601.js","_app/immutable/chunks/index.7c4a083c.js","_app/immutable/chunks/_page.f5335bf5.js"];
const stylesheets = ["_app/immutable/assets/_page.43722203.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=3-3041e7d5.js.map
