var t=Object.defineProperty;var i=(e,o,s)=>o in e?t(e,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[o]=s;var n=(e,o,s)=>(i(e,typeof o!="symbol"?o+"":o,s),s);const a={nessuna:{label:"Nessuna",costo:0},squalo:{label:"Squalo",costo:10},dip:{label:"Dip",costo:20},long:{label:"Long",costo:30}},c={r6:{label:"R6",costo:0},duke:{label:"Duke",costo:0},mt:{label:"MT",costo:0}},r=e=>e===""?{label:"Nessuna incisione",costo:0}:{label:"Incisione personalizzata: ",costo:20};class u{constructor(o,s,l){n(this,"incisione");n(this,"appendice");n(this,"modello");this.incisione=o,this.appendice=s,this.modello=l}get costo(){let o=10;return o+=this.incisione===""?0:20,o+=a[this.appendice].costo,o+=c[this.modello].costo,o}}export{a as A,r as I,u as T};