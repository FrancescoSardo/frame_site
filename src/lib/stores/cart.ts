import { tampone_equals, type TamponeType } from "$lib/data/tampone";
import { writable, type Writable } from "svelte/store";

let cart: TamponeType[] = [{
  incisione: "",
  appendice: "nessuna",
  modello: "r6",
  costo: 1
}, {
  incisione: "ciao",
  appendice: "nessuna",
  modello: "r6",
  costo: 2
}, {
  incisione: "ciao",
  appendice: "nessuna",
  modello: "r6",
  costo: 3
}, {
  incisione: "ciao",
  appendice: "nessuna",
  modello: "r6",
  costo: 4
}, {
  incisione: "ciao",
  appendice: "nessuna",
  modello: "r6",
  costo: 5
}, {
  incisione: "ciao",
  appendice: "nessuna",
  modello: "r6",
  costo: 6
}, {
  incisione: "ciao",
  appendice: "nessuna",
  modello: "r6",
  costo: 7
}]

export const cart_store: Writable<TamponeType[]> = writable(cart);

cart_store.subscribe(value => {
  cart = value;
});

export function add_to_cart(tampone: TamponeType) {
  cart.push(tampone);
  cart_store.set(cart);
}

export function remove_from_cart(tampone: TamponeType) {
  cart = cart.filter(t => tampone_equals(t, tampone));
  cart_store.set(cart);
}

export function clear_cart() {
  cart = [];
  cart_store.set(cart);
}

export function get_cart(): TamponeType[] {
  return cart;
}