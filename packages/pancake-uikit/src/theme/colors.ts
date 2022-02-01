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
  contrast: "#111222",
  dropdown: "#F6F6F6",
  invertedContrast: "#FFFFFF",
  input: "#9196ee",
  inputSecondary: "#d7caec",
  tertiary: "#EFF4F5",
  text: "#ce492e",
  textDisabled: "#a89490",
  textSubtle: "#631404",
  borderColor: "#551b10",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #FB5230 0%, #7843e2 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#a279f5",
  background: "#202136",
  backgroundDisabled: "#281b38",
  contrast: "#FFFFFF",
  dropdown: "#1E1D20",
  invertedContrast: "#191326",
  input: "#483f5a",
  inputSecondary: "#66578D",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#7534f7",
  textDisabled: "#666171",
  textSubtle: "#fc7358",
  borderColor: "#e67761",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #FB5230 0%, #e97d68 100%)",
  },
};
