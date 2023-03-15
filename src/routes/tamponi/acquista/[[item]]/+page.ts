import { Tampone } from '$lib/data/tampone';
import { getShopStore, shop_store } from '$lib/stores/shop';
import type { PageLoad } from './$types';

export const load = (({ params }) => {
  let tampone = getShopStore()

  return {
    tampone
  };
}) satisfies PageLoad;