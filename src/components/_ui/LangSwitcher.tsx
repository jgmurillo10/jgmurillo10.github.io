import React, { useContext, useEffect, useState } from "react";
import Switch from "react-switch";
import styled from "@emotion/styled"
import { navigate } from "gatsby";
import { LanguageContext } from "../../context/LanguageContext";

const Icon = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const LangSwitcher = () => {
  const { language } = useContext(LanguageContext);
  const [checked, setChecked] = useState<boolean>(language.current !== 'en-us');
  const hasMoreLocales = language.alternates.length !== 0;

  const onChange = () => {
    const redirectTo = language.alternates[0] || '/';
    setChecked(checked => !checked)
    navigate(redirectTo);
  }

  useEffect(() => {
    setChecked(language.current !== 'en-us')
  }, [language])

  return (
    <Switch
      disabled={!hasMoreLocales}
      height={32}
      width={64}
      checkedIcon={<Icon>🇨🇴</Icon>}
      uncheckedIcon={<Icon>🇺🇸</Icon>}
      onChange={onChange}
      checked={hasMoreLocales && checked}
      onColor="#ccc"
      offColor="#ccc"
      uncheckedHandleIcon={<Icon>🌎</Icon>}
      checkedHandleIcon={<Icon>🌎</Icon>}
    />
  );
}

export default LangSwitcher
