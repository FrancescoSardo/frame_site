import type { TamponeType } from '$lib/data/tampone';
import type { PageLoad } from './$types';

export const load = (({ params }) => {
  let items: TamponeType[] = [{
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
  }];

  return {
    items
  };
}) satisfies PageLoad;