import { useContext, useEffect } from "react";
import { LanguageContext } from "../context/LanguageContext";

const getLangFromDoc = (doc) => ({
  current: doc.lang,
  alternates: doc.alternate_languages.map(alternate => alternate.document.url).map(alternate => alternate.replace('/en-us', '/')),
})

const getLangFromUrl = (path = window.location.pathname) => path.includes('es-co') ? {
  current: 'es-co',
  alternates: [path].map(a =>a.replace('/es-co', '')),
} : {
  current: 'en-us',
  alternates: [`/es-co${path}`],
}

export const useUpdateLanguage = (doc) => {
  const { setLanguage } = useContext(LanguageContext)
  const lang = doc ? getLangFromDoc(doc) : getLangFromUrl();

  useEffect(() => {
    setLanguage(lang);
  }, [doc, setLanguage])

  return { language: lang }
}