// app/composables/useTheme.ts

import { themes, type ThemeName } from "~/cms/themes";

export const useTheme = (themeName: ThemeName) => {
  const theme = themes[themeName];

  if (!theme) {
    console.warn(`Theme "${themeName}" not found, falling back to saas`);
    return themes.saas;
  }

  return theme;
};
