import { Tampone } from '$lib/data/tampone';
import { get_cart, type CartStoreType } from '$lib/stores/cart';
import type { PageLoad } from './$types';

export const load = (({ params }) => {
  let items: CartStoreType = get_cart();

  /* let items = [
   /*  new Tampone("ciao", "nessuna", "r6"),
    new Tampone("prova", "long", "mt"),
    new Tampone("prova", "long", "mt"),
    new Tampone("prova", "long", "mt"), 
  ] */

  return {
    items
  };
}) satisfies PageLoad;