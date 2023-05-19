export type AppendiceTamponeType = "nessuna" | "squalo" | "dip" | "long"
export const AppendiceTamponeInfo: {
  [key in AppendiceTamponeType]: {
    label: string, costo: number
  }
} = {
  nessuna: { label: "Nessuna", costo: 0 },
  squalo: { label: "Squalo", costo: 10 },
  dip: { label: "Plane", costo: 20 },
  long: { label: "Long", costo: 30 }
}

 export type ModelloTamponeType = string
// export const ModelloTamponeInfo: {
//   [key in ModelloTamponeType]: {
//     label: string, costo: number
//   }
// } = {
//   r6: { label: "R6", costo: 0 },
//   duke: { label: "Duke", costo: 0 },
//   mt: { label: "MT", costo: 0 }
// }

export type IncisioneTamponeType = string
export const IncisioneTamponeInfo = (incisione: string): { label: string, costo: number } => {
  if (incisione === "") {
    return { label: "Nessuna incisione", costo: 0 };
  } else {
    return { label: "Incisione personalizzata: ", costo: 20 };
  }
}

export class Tampone {
  incisione: string;
  appendice: AppendiceTamponeType;
  modello: ModelloTamponeType;

  constructor(incisione: string, appendice: AppendiceTamponeType, modello: ModelloTamponeType) {
    this.incisione = incisione;
    this.appendice = appendice;
    this.modello = modello;
  }

  get costo(): number {
    let prezzo = 10;

    prezzo += this.incisione === "" ? 0 : 20;

    prezzo += AppendiceTamponeInfo[this.appendice].costo
    //prezzo += ModelloTamponeInfo[this.modello].costo;

    return prezzo;
  }
}