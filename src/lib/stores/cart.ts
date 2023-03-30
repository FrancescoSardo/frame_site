import type { Tampone } from "$lib/data/tampone";
import { writable, type Writable } from "svelte/store";

export type CartStoreType = Tampone[]

let cart: CartStoreType = []

export const cart_store: Writable<CartStoreType> = writable(cart);

cart_store.subscribe(value => {
  cart = value;
});

export function add_item_to_cart(tampone: Tampone) {
  cart.push(tampone);

  cart_store.set(cart);
}

export function remove_item_from_cart(tampone: Tampone) {
  let index = cart.findIndex(item => item == tampone);

  if(index !== -1) {
    cart.splice(index, 1);
  }
}

export function clear_cart() {
  cart_store.set([]);
}

export function get_cart(): CartStoreType {
  return cart;
}