import { writable } from "svelte/store";

let _background_split: number = 50;
export const background_split = writable<number>(_background_split);


background_split.subscribe((value) => {
  _background_split = value;
})

export function getBackgroundSplit(): number {
  return _background_split;
}

export function setBackgroundSplit(amount: number) {
  background_split.set(amount);
}