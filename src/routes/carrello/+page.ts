import type { TamponeType } from '$lib/data/tampone';
import { get_cart, type CartStoreType } from '$lib/stores/cart';
import type { PageLoad } from './$types';

export const load = (({ params }) => {
  let items: CartStoreType = get_cart();

  return {
    items
  };
}) satisfies PageLoad;