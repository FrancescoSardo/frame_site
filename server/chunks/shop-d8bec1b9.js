import { w as writable } from './index-b0bac5bf.js';

const AppendiceTamponeInfo = {
  nessuna: { label: "Nessuna", costo: 0 },
  squalo: { label: "Squalo", costo: 10 },
  dip: { label: "Dip", costo: 20 },
  long: { label: "Long", costo: 30 }
};
const ModelloTamponeInfo = {
  r6: { label: "R6", costo: 0 },
  duke: { label: "Duke", costo: 0 },
  mt: { label: "MT", costo: 0 }
};
const IncisioneTamponeInfo = (incisione) => {
  if (incisione === "") {
    return { label: "Nessuna incisione", costo: 0 };
  } else {
    return { label: "Incisione personalizzata: ", costo: 20 };
  }
};
class Tampone {
  incisione;
  appendice;
  modello;
  constructor(incisione, appendice, modello) {
    this.incisione = incisione;
    this.appendice = appendice;
    this.modello = modello;
  }
  get costo() {
    let prezzo = 10;
    prezzo += this.incisione === "" ? 0 : 20;
    prezzo += AppendiceTamponeInfo[this.appendice].costo;
    prezzo += ModelloTamponeInfo[this.modello].costo;
    return prezzo;
  }
}

let shop = new Tampone("", "nessuna", "r6");
const shop_store = writable(shop);
shop_store.subscribe((value) => {
  shop = value;
});
function getShopStore() {
  return shop;
}

export { AppendiceTamponeInfo as A, IncisioneTamponeInfo as I, Tampone as T, getShopStore as g };
//# sourceMappingURL=shop-d8bec1b9.js.map
