/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from "react"
import { LanguageProvider } from "./src/context/Language"

export const wrapRootElement = ({ element }) => (
  <LanguageProvider>{element}</LanguageProvider>
);