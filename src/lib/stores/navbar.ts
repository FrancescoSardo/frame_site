import { writable, type Writable } from "svelte/store";

export const top_navbar_active: Writable<boolean> = writable(true);
export const bottom_navbar_active: Writable<boolean> = writable(true);

export const route_store: Writable<string> = writable("");

const navbar_routes: {
  [key in string]: { top: boolean, bottom: boolean };
} = {
  '\/tamponi\/.+~': { top: true, bottom: true },
  '\/specchietti\/.+~': { top: true, bottom: true },
}

const navbar_default: { top: boolean, bottom: boolean } = { top: true, bottom: false };

route_store.subscribe((route) => {
  let route_parsed = route + "~";
  for (const [regex, navbar] of Object.entries(navbar_routes)) {
    console.log(regex, navbar, route_parsed, route_parsed.match(regex));
    if (route_parsed.match(regex)) {
      top_navbar_active.set(navbar.top);
      bottom_navbar_active.set(navbar.bottom);
      return
    }
  }

  top_navbar_active.set(navbar_default.top);
  bottom_navbar_active.set(navbar_default.bottom);
});