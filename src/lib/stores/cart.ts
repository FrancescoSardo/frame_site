import type { Tampone } from "$lib/data/tampone";
import { writable, type Writable } from "svelte/store";

export type CartStoreType = {[key in string]: {
  tampone: Tampone,
  quantity: number
}}

let cart: CartStoreType = {}

export const cart_store: Writable<CartStoreType> = writable(cart);

cart_store.subscribe(value => {
  cart = value;
});

export function add_item_to_cart(tampone: Tampone) {
  let hash = tampone.hash;

  if(hash in cart) {
    cart[hash].quantity += 1;
  } else {
    cart[hash] = { tampone, quantity: 1 };
  }

  cart_store.set(cart);
}

export function remove_item_from_cart(tampone: Tampone) {
  let hash = tampone.hash;

  if(hash in cart) { 
    if(cart[hash].quantity > 1) {
      cart[hash].quantity -= 1;
    } else {
      delete cart[hash];
    }
  }

  cart_store.set(cart);
}

export function get_quantity_from_cart(tampone: Tampone): number {
  let hash = tampone.hash;

  if(hash in cart) {
    return cart[hash].quantity;
  } else {
    return 0;
  }
}

export function clear_cart() {
  cart = {}
  cart_store.set(cart);
}

export function get_cart(): CartStoreType {
  return cart;
}