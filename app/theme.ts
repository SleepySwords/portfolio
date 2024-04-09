import { createContext } from "react";

export enum Theme {
  Auto = "auto",
  Dark = "dark",
  Light = "light",
}

type ContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

export const ThemeContext = createContext<ContextType>({
  theme: Theme.Auto,
  setTheme: () => {},
});
