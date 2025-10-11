import { createContext } from "react";
import type { Lang } from "./translations";

export type LanguageContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
};

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
