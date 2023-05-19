import { Tampone } from "$lib/data/tampone";
import { writable, type Writable } from "svelte/store";


export type ShopStoreType = Tampone

let shop: Tampone = new Tampone("", "nessuna" , "paperino")

export const shop_store: Writable<ShopStoreType> = writable(shop);

shop_store.subscribe(value => {
  shop = value
})

export function getShopStore(): ShopStoreType {
  return shop
}