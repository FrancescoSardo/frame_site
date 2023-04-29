export type conftype = "Long" | "Plane" | "Shark" | "Tampone";

export const ConfInfo: {
  [key in conftype]: {
    label: string;
    descD: Array<string>;
    descT: Array<string>;
    descdim: Array<string>;
  };
} = {
  Long: {
    label: "Long",
    descD: ["Long Design 1", "Long Design 2"],
    descT: ["Long Tecnico 1", "Long Design 2"],
    descdim: ["Dimensione  1", "DImensione 2"],
  },
  Plane: {
    label: "Plane",
    descD: ["dest Design 1", "Desc Design 2"],
    descT: ["dest Tecnico 1", "Desc Design 2"],
    descdim: ["Dimensione  1", "DImensione 2"],
  },
  Shark: {
    label: "Shark",
    descD: ["Shark Design 1", "Shark Design 2"],
    descT: ["Shark Tecnico 1", "Shark Design 2"],
    descdim: ["Dimensione  1", "DImensione 2"],
  },
  Tampone: {
    label: "Tampone",
    descD: ["Tampone Design 1", "Tampone Design 2"],
    descT: ["Tampone Tecnico 1", "Tampone Design 2"],
    descdim: ["Dimensione  1", "DImensione 2"],
  },
};
