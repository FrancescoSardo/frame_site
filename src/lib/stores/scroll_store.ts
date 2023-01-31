import { writable } from "svelte/store";

let _scroll_offset: number = 0;
export const scroll_offset = writable<number>(_scroll_offset);


scroll_offset.subscribe((value) => {
  _scroll_offset = value;
})

export function getScrollOffset(): number {
  return _scroll_offset;
}

export function setScrollOffset(amount: number) {
  scroll_offset.set(amount);
}