export type TamponeType = {
  incisione: string;
  appendice: AppendiceTampone;
  modello: ModelloTampone;
  costo: number;
}

export function tampone_equals(t1: TamponeType, t2: TamponeType) {
  return t1.incisione == t2.incisione && t1.appendice == t2.appendice && t1.modello == t2.modello
}

export type TamponeParts = "incisione" | "appendice" | "modello"

// #region ===== Incisione =====
export const CostoIncisioneTampone: Record<0 | 1, number> = {
  1: 20,
  0: 0
}

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
  "appendice": {
    "header": string,
    "options": {
      "id": AppendiceTampone,
      "label": string,
      "price": number
    }[],
    "selected": number
  },
  "modello": {
    "header": string,
    "options": {
      "id": ModelloTampone,
      "label": string,
      "price": number
    }[],
    "selected": number
  }
}

export function generaInfoShop(tampone?: TamponeType): ShopInfo {
  tampone = tampone || {
    incisione: "",
    appendice: "nessuna",
    modello: "r6",
    costo: 0
  }

  const info: ShopInfo = {
    appendice: {
      header: "Appendice aerodinamica",
      options: AppendiceTamponeList.map(i => ({ id: i, label: LabelAppendiceTampone[i], price: CostoAppendiceTampone[i] })),
      selected: AppendiceTamponeList.indexOf(tampone.appendice)
    },
    modello: {
      header: "Modello",
      options: ModelloTamponeList.map(i => ({ id: i, label: LabelModelloTampone[i], price: CostoModelloTampone[i] })),
      selected: ModelloTamponeList.indexOf(tampone.modello)
    }
  }

  return info 
}

export function generaTamponeDaShopInfo(shopinfo: ShopInfo, incisione: string = ""): TamponeType {
  const tampone: TamponeType = {
    incisione: incisione,
    appendice: shopinfo.appendice.options[shopinfo.appendice.selected].id,
    modello: shopinfo.modello.options[shopinfo.modello.selected].id,
    costo: 0
  }

  tampone.costo += CostoIncisioneTampone[tampone.incisione === "" ? 0 : 1] 
  tampone.costo += CostoAppendiceTampone[tampone.appendice] + CostoModelloTampone[tampone.modello]

  return tampone
}