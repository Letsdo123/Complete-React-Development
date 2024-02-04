import { createContext, useContext } from "react";

// Creating the context using createContext
export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: function () {},
  lightTheme: function () {},
});

// craeting the theme provider
export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
  return useContext(ThemeContext);
}
