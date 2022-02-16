import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#FB5230",
  primaryBright: "#EC836E",
  primaryDark: "#b92608",
  secondary: "#330099",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#0773C9",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#e28370",
  backgroundDisabled: "#da9a8d",
  contrast: "#311b17",
  dropdown: "#F6F6F6",
  invertedContrast: "#FFFFFF",
  input: "#f1baaf",
  inputSecondary: "#d7caec",
  tertiary: "#EFF4F5",
  text: "#ce492e",
  textDisabled: "#dad5d5",
  textSubtle: "#631404",
  borderColor: "#551b10",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #FB5230 0%, #E28370 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#a279f5",
  background: "#202136",
  backgroundDisabled: "#281b38",
  contrast: "#FFFFFF",
  dropdown: "#2c2624",
  invertedContrast: "#662a1e",
  input: "#7a534c",
  inputSecondary: "#b18179",
  primaryDark: "#c73316",
  tertiary: "#8a6058",
  text: "#f0745c",
  textDisabled: "#745a55",
  textSubtle: "#fc7358",
  borderColor: "#e67761",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #FB5230 0%, #e97d68 100%)",
  },
};
