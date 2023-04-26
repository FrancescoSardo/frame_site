export type item = {
  marca: Marca;
  modello: string;
  anno: number;
}
export let Model_db:  item[] = [
  { marca: "Skoda", modello: "A4", anno: 2019 },
  { marca: "Audi", modello: "4", anno: 2019 },
  { marca: "Bmw", modello: "2", anno: 2019 },
  { marca: "Skoda", modello: "1", anno: 2023 },
  { marca: "Skoda", modello: "1", anno: 2023 },
  { marca: "Skoda", modello: "1", anno: 2023 },
  { marca: "Skoda", modello: "1", anno: 2023 },
  { marca: "Skoda", modello: "1", anno: 2023 },
]


export type Marca = "Audi" | "Bmw" | "Skoda"
export const MARCHE: Marca[] = ["Audi", "Bmw", "Skoda"]
export type Modello = "A4" | "4" | "2"
export const MODELLO: Marca[] = ["A4", "4", "2"]
export type Anno = number
export const ANNO: Anno[] = [2019, 2020, 2021]

import { writable, type Writable } from "svelte/store";
export type ModelliType = item[]

let lista: ModelliType= [
  { marca: "Skoda", modello: "A4", anno: 2019 },
  { marca: "Audi", modello: "4", anno: 2019 },
  { marca: "Bmw", modello: "2", anno: 2019 },
  { marca: "Skoda", modello: "1", anno: 201 },
]

export const modelli_store: Writable<ModelliType> = writable(lista);



