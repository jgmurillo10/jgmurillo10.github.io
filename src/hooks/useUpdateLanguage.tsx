import { useContext, useEffect } from "react";
import { LanguageContext } from "../context/LanguageContext";

const getLangFromDoc = (doc) => ({
  current: doc.lang,
  alternates: doc.alternate_languages.map(alternate => alternate.document.url).map(alternate => alternate.replace('/en-us', '/')),
})

const getLangFromUrl = (pathname) => pathname.includes('es-co') ? {
  current: 'es-co',
  alternates: [pathname].map(a =>a.replace('/es-co', '')),
} : {
  current: 'en-us',
  alternates: [`/es-co${pathname}`],
}

export const useUpdateLanguage = (args) => {
  const { setLanguage } = useContext(LanguageContext)
  const lang = args?.doc ? getLangFromDoc(args.doc) : getLangFromUrl(args?.location?.pathname);

  useEffect(() => {
    setLanguage(lang);
  }, [args.doc, setLanguage])

  return { language: lang }
}