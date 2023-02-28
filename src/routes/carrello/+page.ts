import type { TamponeType } from '$lib/data/tampone';
import type { PageLoad } from './$types';

export const load = (({ params }) => {
  let items: TamponeType[] = [{
    incisione: "",
    appendice: "nessuna",
    modello: "r6",
    costo: 0
  }, {
    incisione: "ciao",
    appendice: "nessuna",
    modello: "r6",
    costo: 0
  }, {
    incisione: "ciao",
    appendice: "nessuna",
    modello: "r6",
    costo: 0
  }, {
    incisione: "ciao",
    appendice: "nessuna",
    modello: "r6",
    costo: 0
  }, {
    incisione: "ciao",
    appendice: "nessuna",
    modello: "r6",
    costo: 0
  }, {
    incisione: "ciao",
    appendice: "nessuna",
    modello: "r6",
    costo: 0
  }, {
    incisione: "ciao",
    appendice: "nessuna",
    modello: "r6",
    costo: 0
  }];

  return {
    items
  };
}) satisfies PageLoad;