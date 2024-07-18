import { createContext, useState } from "react";

export enum Themes {
  Default = "default",
  Orange = "orange",
}

const ThemeOptions = [Themes.Default, Themes.Orange];

interface IThemeContext {
  currentTheme: Themes;
  setCurrentTheme: React.Dispatch<React.SetStateAction<Themes>> | null;
  ThemeOptions: Themes[];
}
export const ThemeContext = createContext({
  currentTheme: Themes.Default,
  setCurrentTheme: null,
  ThemeOptions: [],
} as IThemeContext);

function ThemeProvider({ children }: { children: JSX.Element }) {
  const [currentTheme, setCurrentTheme] = useState<Themes>(Themes.Default);
  const value = {
    currentTheme,
    setCurrentTheme,
    ThemeOptions,
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export default ThemeProvider;
