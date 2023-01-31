import { writable } from "svelte/store";

let _active_page: number = 0;
export const active_page = writable<number>(_active_page);


active_page.subscribe((value) => {
  _active_page = value;
})

export function getActivePage(): number {
  return _active_page;
}

export function setActivePage(amount: number) {
  active_page.set(amount);
}