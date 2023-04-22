import { w as writable } from './index-b0bac5bf.js';

const top_navbar_active = writable(true);
const bottom_navbar_active = writable(true);
const route_store = writable("");
const navbar_routes = {
  "/tamponi/.+~": { top: true, bottom: true },
  "/specchietti/.+~": { top: true, bottom: true }
};
const navbar_default = { top: true, bottom: false };
route_store.subscribe((route) => {
  let route_parsed = route + "~";
  for (const [regex, navbar] of Object.entries(navbar_routes)) {
    if (route_parsed.match(regex)) {
      top_navbar_active.set(navbar.top);
      bottom_navbar_active.set(navbar.bottom);
      return;
    }
  }
  top_navbar_active.set(navbar_default.top);
  bottom_navbar_active.set(navbar_default.bottom);
});

export { bottom_navbar_active as b, route_store as r, top_navbar_active as t };
//# sourceMappingURL=navbar-e0faa3f2.js.map
