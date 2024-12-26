import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { buttonRecipe } from "./buttonRecipe";

const customConfig = defineConfig({
  globalCss: {
    ":root": {
      color: "aca_primary.500",
    },
    "*::placeholder": {
      color: "aca_primary.400",
    },
    "*::selection": {
      bg: "#bb9bd1",
    },
  },
  theme: {
    recipes: {
      button: buttonRecipe,
    },
    tokens: {
      colors: {
        aca_primary: {
          400: { value: "#783BA2" },
          500: { value: "#462576" },
        },
        aca_tomato: {
          400: { value: "#FF6542" },
          500: { value: "#FA4E27" },
        },
        aca_cyan: {
          400: { value: "#00BE98" },
          500: { value: "#04B08E" },
        },
        aca_offwhite: { value: "#EADAC1" },
      },
      fontSizes: {
        primary: {
          mb: { value: "15px" },
          tb: { value: "20px" },
          dt: { value: "18px" },
        },
        secondary: {
          mb: { value: "14px" },
          tb: { value: "19px" },
          dt: { value: "17px" },
        },
        another: {
          mb: { value: "18px" },
          tb: { value: "25px" },
          dt: { value: "23px" },
        },
      },
      radii: {
        tiny: { value: "5px" },
        normal: { value: "10px" },
      },
    },
    semanticTokens: {
      shadows: {
        aca_shadow: {
          mb: {
            value: "0px 1px 10px 0px rgba(0, 0, 0, 0.25)",
          },
          tb: {
            value: "0px 1px 20px 2px rgba(0, 0, 0, 0.25)",
          },
          dt: {
            value: "0px 1px 20px 1px rgba(0, 0, 0, 0.25)",
          },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
