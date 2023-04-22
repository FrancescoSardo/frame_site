import { c as create_ssr_component, a as subscribe, v as validate_component, b as add_attribute } from './index2-6e589ef6.js';
import { p as page } from './stores-ccb11ca7.js';
import { r as route_store, b as bottom_navbar_active, t as top_navbar_active } from './navbar-e0faa3f2.js';
import { c as cart_store } from './cart-cb3249bf.js';
import './index-b0bac5bf.js';

const logo = "/frame_site/_app/immutable/assets/logo.19ae4c51.svg";
const css$3 = {
  code: ".navbar.svelte-11dyweu.svelte-11dyweu{box-sizing:border-box;transition:height 0.1s ease;height:100%;display:flex;align-items:center;gap:2rem;padding:0 2rem;font-size:1.2rem}.navbar.svelte-11dyweu .spacer.svelte-11dyweu{flex:1}.navbar.svelte-11dyweu .tab-link.svelte-11dyweu{display:flex;justify-content:center;flex-direction:column;cursor:pointer;gap:0.1rem}.navbar.svelte-11dyweu .tab-link .underline.svelte-11dyweu{background-color:rgb(50, 50, 50);height:3px;width:0%;transition:width 0.5s ease-in-out, background-color 0.5s ease-in-out;align-self:center;border-radius:2rem}.navbar.svelte-11dyweu .tab-link.active.svelte-11dyweu{color:var(--color-var1);cursor:default;pointer-events:none}.navbar.svelte-11dyweu .tab-link:hover .underline.svelte-11dyweu{width:100%;background-color:rgb(0, 0, 0)}.navbar.svelte-11dyweu .logo.svelte-11dyweu{height:5rem;width:5rem}.navbar.svelte-11dyweu .logo img.svelte-11dyweu{height:100%;width:100%}",
  map: null
};
const NavbarTop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $top_navbar_active, $$unsubscribe_top_navbar_active;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_top_navbar_active = subscribe(top_navbar_active, (value) => $top_navbar_active = value);
  let active = $top_navbar_active;
  top_navbar_active.subscribe((value) => {
    active = value;
  });
  let route = $page.route.id || "";
  page.subscribe((value) => {
    route = value.route.id || "";
  });
  $$result.css.add(css$3);
  $$unsubscribe_page();
  $$unsubscribe_top_navbar_active();
  return `

<div class="${["navbar svelte-11dyweu", active ? "active" : ""].join(" ").trim()}"><div class="${"spacer desktop-only svelte-11dyweu"}"></div>
  <div class="${"logo svelte-11dyweu"}"><img${add_attribute("src", logo, 0)} class="${"svelte-11dyweu"}"></div>
  <div class="${"title desktop-only"}">Frame</div>
  <div class="${"spacer svelte-11dyweu"}"></div>
  <div class="${"specchietti tab-link desktop-only svelte-11dyweu"}"><div class="${"text"}">specchietti</div>
    <div class="${"underline svelte-11dyweu"}"></div></div>
  <div class="${[
    "tamponi tab-link desktop-only svelte-11dyweu",
    route.includes("tamponi") ? "active" : ""
  ].join(" ").trim()}"><div class="${"text"}">tamponi</div>
    <div class="${"underline svelte-11dyweu"}"></div></div>
  <div class="${"spacer desktop-only svelte-11dyweu"}"></div>
  <div class="${"carrello tab-link desktop-only svelte-11dyweu"}">carrello
  </div>
  <div class="${"chisiamo tab-link desktop-only svelte-11dyweu"}">chi siamo?
  </div>
  <div class="${"spacer desktop-only svelte-11dyweu"}"></div>
</div>`;
});
const css$2 = {
  code: ".navbar.svelte-14usw2g.svelte-14usw2g{box-sizing:border-box;height:100%;display:flex;gap:3rem;align-items:flex-end;height:var(--navbar-height-2);box-sizing:border-box;align-items:center}.navbar.svelte-14usw2g .tab-link.active.svelte-14usw2g{color:var(--color-var1);pointer-events:none}.navbar.svelte-14usw2g .tab-link.svelte-14usw2g{color:var(--color-var3);user-select:none;cursor:pointer}.navbar.svelte-14usw2g .acquista.svelte-14usw2g{padding:0.2rem 1rem 0.2rem 1rem;border-radius:2rem;box-sizing:border-box;user-select:none;transition:all 0.2s ease-in-out;cursor:pointer;background-color:white;color:#0085ff;border:2px solid #0085ff}.navbar.svelte-14usw2g .acquista.active.svelte-14usw2g{background-color:#0085ff;color:white}.navbar.svelte-14usw2g .acquista.svelte-14usw2g:hover{background-color:#0085ff;color:white}",
  map: null
};
const NavbarBottom = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $$unsubscribe_bottom_navbar_active;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_bottom_navbar_active = subscribe(bottom_navbar_active, (value) => value);
  bottom_navbar_active.subscribe((value) => {
  });
  let route = $page.route.id || "";
  page.subscribe((value) => {
    route = value.route.id || "";
  });
  $$result.css.add(css$2);
  $$unsubscribe_page();
  $$unsubscribe_bottom_navbar_active();
  return `
<nav class="${"navbar svelte-14usw2g"}"><div class="${"spacer-1"}"></div>
  <div class="${"title"}">Swab M-Bike</div>
  <div class="${"spacer-5"}"></div>
  <div class="${"tab-link panoramica svelte-14usw2g"}">panoramica
  </div>
  <div class="${[
    "tab-link confronta svelte-14usw2g",
    route.includes("confronta") ? "active" : ""
  ].join(" ").trim()}">confronta
  </div>
  <div class="${["tab-link acquista svelte-14usw2g", route.includes("acquista") ? "active" : ""].join(" ").trim()}">acquista
  </div>
  <div class="${"spacer-1"}"></div>
</nav>`;
});
const css$1 = {
  code: ".navbar.svelte-vfvsh.svelte-vfvsh{z-index:1000;box-sizing:border-box;height:100%;display:flex;flex-direction:row;align-items:center}.navbar.svelte-vfvsh .logo.svelte-vfvsh{width:3rem;height:3rem;display:flex;align-items:center;justify-content:center}.navbar.svelte-vfvsh .logo img.svelte-vfvsh{width:100%;height:100%}.navbar.svelte-vfvsh .hamburger.svelte-vfvsh{width:32px;height:32px;display:flex;flex-direction:column;justify-content:space-between;cursor:pointer;box-sizing:border-box}.navbar.svelte-vfvsh .hamburger span.svelte-vfvsh{width:100%;height:5px;background-color:black;border-radius:2rem;transition:all 1s ease}.navbar.svelte-vfvsh .hamburger.active span.svelte-vfvsh:nth-child(1){transform:rotate(45deg) translate(10px, 10px)}.navbar.svelte-vfvsh .hamburger.active span.svelte-vfvsh:nth-child(2){opacity:0}.navbar.svelte-vfvsh .hamburger.active span.svelte-vfvsh:nth-child(3){transform:rotate(-45deg) translate(9px, -9px)}.menu.svelte-vfvsh.svelte-vfvsh{z-index:1000;position:absolute;top:var(--navbar-height-1);height:0rem;width:100%;overflow:hidden;background:white;transition:height 1s ease;border-bottom:3px solid black;display:flex}.menu.svelte-vfvsh .half-menu.svelte-vfvsh{width:50%;position:relative;display:flex;flex-direction:column;padding:1rem;gap:0.5rem}.menu.svelte-vfvsh .right.svelte-vfvsh{left:50%;transition:left 1s ease;align-items:flex-end}.menu.svelte-vfvsh .left.svelte-vfvsh{right:50%;transition:right 1s ease;align-items:flex-start}.menu.svelte-vfvsh .mob-link.svelte-vfvsh{cursor:pointer;text-decoration:underline}.menu.svelte-vfvsh .mob-link.active.svelte-vfvsh{color:var(--color-var1);cursor:default}.menu.active.svelte-vfvsh.svelte-vfvsh{height:9rem}.menu.active.svelte-vfvsh .right.svelte-vfvsh{left:0}.menu.active.svelte-vfvsh .left.svelte-vfvsh{right:0}",
  map: null
};
const NavbarMobile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let route = $page.route.id || "";
  page.subscribe((value) => {
    route = value.route.id || "";
  });
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `

<div class="${"navbar svelte-vfvsh"}"><div class="${"spacer-1"}"></div>
  <div class="${"logo svelte-vfvsh"}"><img${add_attribute("src", logo, 0)} class="${"svelte-vfvsh"}"></div>
  <div class="${"spacer-3"}"></div>
  <div class="${"spacer-3"}"></div>
  <div class="${["hamburger svelte-vfvsh", ""].join(" ").trim()}"><span class="${"line1 svelte-vfvsh"}"></span>
    <span class="${"line2 svelte-vfvsh"}"></span>
    <span class="${"line3 svelte-vfvsh"}"></span></div>
  <div class="${"spacer-1"}"></div>

  <div class="${["menu svelte-vfvsh", ""].join(" ").trim()}"><div class="${"left half-menu svelte-vfvsh"}"><div class="${["mob-link svelte-vfvsh", route.includes("specchietti") ? "active" : ""].join(" ").trim()}">Specchietti
      </div>
      <div class="${["mob-link svelte-vfvsh", route.includes("tamponi") ? "active" : ""].join(" ").trim()}">Tamponi
      </div></div>
    <div class="${"right half-menu svelte-vfvsh"}"><div class="${["mob-link  svelte-vfvsh", route.includes("confronta") ? "active" : ""].join(" ").trim()}">Confronta
      </div>
      <div class="${["mob-link  svelte-vfvsh", route.includes("panoramica") ? "active" : ""].join(" ").trim()}">Panoramica
      </div>
      <div class="${["mob-link  svelte-vfvsh", route.includes("chisiamo") ? "active" : ""].join(" ").trim()}">Chi siamo?
      </div>
      <div class="${["mob-link  svelte-vfvsh", route.includes("carrello") ? "active" : ""].join(" ").trim()}">Carrello
      </div></div></div>
</div>`;
});
const css = {
  code: ".layout.svelte-b062kv.svelte-b062kv{height:calc(var(--vh, 1vh) * 100);display:flex;flex-direction:column}.layout.svelte-b062kv .navbar-mobile.svelte-b062kv{display:none}.layout.svelte-b062kv .navbar-desktop.svelte-b062kv{--translateY:calc(var(--h1) - var(--navbar-height-1));height:var(--navbar-height-total);transition:height 0.5s ease-in-out;overflow:hidden}.layout.svelte-b062kv .top-nav.svelte-b062kv{height:var(--navbar-height-1);transform:translateY(var(--translateY));transition:transform 0.5s ease-in-out}.layout.svelte-b062kv .bottom-nav.svelte-b062kv{height:var(--navbar-height-2);transform:translateY(var(--translateY));transition:transform 0.5s ease-in-out}.layout.svelte-b062kv .content.svelte-b062kv{height:calc(var(--vh, 1vh) * 100 - var(--navbar-height-total));transition:height 0.5s ease-in-out;display:flex;flex-direction:column;border-top:0.2rem solid;box-sizing:border-box}@media(max-width: 768px){.layout.svelte-b062kv .navbar-desktop.svelte-b062kv{display:none}.layout.svelte-b062kv .navbar-mobile.svelte-b062kv{display:block;height:var(--navbar-height-mobile)}.layout.svelte-b062kv .content.svelte-b062kv{height:calc(var(--vh, 1vh) * 100 - var(--navbar-height-mobile))}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $cart_store, $$unsubscribe_cart_store;
  let $$unsubscribe_top_navbar_active;
  let $$unsubscribe_bottom_navbar_active;
  $$unsubscribe_cart_store = subscribe(cart_store, (value) => $cart_store = value);
  $$unsubscribe_top_navbar_active = subscribe(top_navbar_active, (value) => value);
  $$unsubscribe_bottom_navbar_active = subscribe(bottom_navbar_active, (value) => value);
  page.subscribe((value) => {
    route_store.set(value.route.id || "");
  });
  bottom_navbar_active.subscribe((value) => {
  });
  top_navbar_active.subscribe((value) => {
  });
  const snapshot = {
    capture: () => {
      return { cart: $cart_store };
    },
    restore: (state) => {
      cart_store.set(state.cart);
    }
  };
  if ($$props.snapshot === void 0 && $$bindings.snapshot && snapshot !== void 0)
    $$bindings.snapshot(snapshot);
  $$result.css.add(css);
  $$unsubscribe_cart_store();
  $$unsubscribe_top_navbar_active();
  $$unsubscribe_bottom_navbar_active();
  return `

<div class="${"layout svelte-b062kv"}"><div class="${"navbar-desktop svelte-b062kv"}"><div class="${"top-nav svelte-b062kv"}">${validate_component(NavbarTop, "NavbarTop").$$render($$result, {}, {}, {})}</div>
    <div class="${"bottom-nav svelte-b062kv"}">${validate_component(NavbarBottom, "NavbarBottom").$$render($$result, {}, {}, {})}</div></div>
  <div class="${"navbar-mobile svelte-b062kv"}">${validate_component(NavbarMobile, "NavbarMobile").$$render($$result, {}, {}, {})}</div>
  <div class="${"content svelte-b062kv"}">${slots.default ? slots.default({}) : ``}</div>
</div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-dd388a2e.js.map
