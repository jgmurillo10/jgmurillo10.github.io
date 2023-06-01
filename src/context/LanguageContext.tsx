import type { Dispatch, SetStateAction } from "react";
import { createContext } from "react";

export interface Language {
    current: string;
    alternates: Array<string>;
}
export interface LanguageContextProps {
  language: Language;
  setLanguage: Dispatch<SetStateAction<Language>>;
}

export const initialContext = {
  language: {
    current: '',
    alternates: []
  },
  setLanguage: () => {}
};

export const LanguageContext = createContext<LanguageContextProps>(
  initialContext
);
