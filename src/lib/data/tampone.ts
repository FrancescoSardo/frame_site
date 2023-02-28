export type TamponeType = {
  incisione: IncisioneTampone;
  appendice: AppendiceTampone;
  modello: ModelloTampone;
  costo: number;
}

// #region ===== Incisione =====
export type IncisioneTampone = string


// #region ===== Appendice =====
export type AppendiceTampone = "nessuna" | "squalo" | "dip" | "long"
const AppendiceTamponeList: AppendiceTampone[] = ["nessuna", "squalo", "dip", "long"]

export const LabelAppendiceTampone: Record<AppendiceTampone, string> = {
  squalo: "Squalo",
  dip: "Dip",
  long: "Long",
  nessuna: "Nessuna"
}

export const CostoAppendiceTampone: Record<AppendiceTampone, number> = {
  squalo: 10,
  dip: 20,
  long: 30,
  nessuna: 0
}

// #endregion

// #region ===== Modello =====
export type ModelloTampone = "r6" | "duke" | "mt"
const ModelloTamponeList: ModelloTampone[] = ["r6", "duke", "mt"]

export const LabelModelloTampone: Record<ModelloTampone, string> = {
  r6: "R6",
  duke: "Duke",
  mt: "MT"
}

export const CostoModelloTampone: Record<ModelloTampone, number> = {
  r6: 0,
  duke: 0,
  mt: 0
}

// #endregion
export type ShopInfo = {
  sections: ShopSection[];
}

export type ShopSection = {
  header: string;
  choices: ShopChoice[];
  seleted: number;
}

export type ShopChoice = {
  label: string;
  price: number;
}

export function generaInfoShop(tampone?: TamponeType): ShopInfo {
  tampone = tampone || {
    incisione: "",
    appendice: "nessuna",
    modello: "r6",
    costo: 0
  }

  let sections = []

  // Incisione
  sections.push({
    header: "Incisione personalizzata",
    choices: [{
      label: "Nessuna incisione",
      price: 0
    }, {
      label: "Si",
      price: 20
    }],
    seleted: tampone.incisione == "" ? 1 : 0
  })

  // Appendice
  sections.push({
    header: "Appendice aerodinamica",
    choices: AppendiceTamponeList.map((appendice) => ({
      label: LabelAppendiceTampone[appendice],
      price: CostoAppendiceTampone[appendice]
    })),
    seleted: AppendiceTamponeList.indexOf(tampone.appendice)
  })

  // Modello
  sections.push({
    header: "Modello",
    choices: ModelloTamponeList.map((modello) => ({
      label: LabelModelloTampone[modello],
      price: CostoModelloTampone[modello]
    })),
    seleted: ModelloTamponeList.indexOf(tampone.modello)
  })

  return { sections }
}