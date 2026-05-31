export type ThemeName = "sunny" | "pastel" | "neon" | "earth" | "candy" | "nordic";

export interface Theme {
  bg: string;
  accent1: string;
  accent2: string;
  accent3: string;
  accent4: string;
  accent5: string;
  ink: string;
  shadow: string;
}

export const themes: Record<ThemeName, Theme> = {
  sunny: {
    bg: "#fdf6e3",
    accent1: "#ffe033",
    accent2: "#ff6b6b",
    accent3: "#6bcfff",
    accent4: "#b4f0c0",
    accent5: "#c5b4f0",
    ink: "#111111",
    shadow: "#111111",
  },
  pastel: {
    bg: "#fff9f9",
    accent1: "#ffb3c1",
    accent2: "#b5ead7",
    accent3: "#c7ceea",
    accent4: "#ffdac1",
    accent5: "#e2f0cb",
    ink: "#111111",
    shadow: "#111111",
  },
  neon: {
    bg: "#f0fff4",
    accent1: "#00ff87",
    accent2: "#ff006e",
    accent3: "#ffbe0b",
    accent4: "#3a86ff",
    accent5: "#fb5607",
    ink: "#111111",
    shadow: "#111111",
  },
  earth: {
    bg: "#fdf0e0",
    accent1: "#e07a5f",
    accent2: "#f2cc8f",
    accent3: "#81b29a",
    accent4: "#f4f1de",
    accent5: "#3d405b",
    ink: "#1a1a1a",
    shadow: "#1a1a1a",
  },
  candy: {
    bg: "#fff0fb",
    accent1: "#ff99c8",
    accent2: "#fcf6bd",
    accent3: "#d0f4de",
    accent4: "#a9def9",
    accent5: "#e4c1f9",
    ink: "#111111",
    shadow: "#111111",
  },
  nordic: {
    bg: "#eceff4",
    accent1: "#88c0d0",
    accent2: "#bf616a",
    accent3: "#a3be8c",
    accent4: "#ebcb8b",
    accent5: "#b48ead",
    ink: "#2e3440",
    shadow: "#2e3440",
  },
};

export const activeTheme: ThemeName = "candy";

export const theme = themes[activeTheme];
