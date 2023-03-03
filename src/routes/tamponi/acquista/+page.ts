import { generaInfoShop } from '$lib/data/tampone';
import type { PageLoad } from './$types';
 
export const load = (({ params }) => {

  return {
    shopinfo: generaInfoShop()
  };
}) satisfies PageLoad;