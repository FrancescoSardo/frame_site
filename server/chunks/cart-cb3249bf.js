import { w as writable } from './index-b0bac5bf.js';

let cart = [];
const cart_store = writable(cart);
cart_store.subscribe((value) => {
  cart = value;
});
function add_item_to_cart(tampone) {
  cart.push(tampone);
  cart_store.set(cart);
}
function get_cart() {
  return cart;
}

export { add_item_to_cart as a, cart_store as c, get_cart as g };
//# sourceMappingURL=cart-cb3249bf.js.map
