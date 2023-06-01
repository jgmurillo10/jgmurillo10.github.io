import React, { useState } from "react";
import type { Language } from "./LanguageContext";
import { LanguageContext, initialContext } from "./LanguageContext";
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState<Language>(initialContext.language);

  return (
    <LanguageContext.Provider value={{ ...initialContext, language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
