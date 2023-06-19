import React from "react";
import { useTranslation } from "react-i18next";

function LanguageSelector() {
  const { i18n } = useTranslation();

  function handleLanguageChange(event) {
    const lang = event.target.value;
    i18n.changeLanguage(lang);
  }

  return (
    <select value={i18n.language} onChange={handleLanguageChange}>
      <option value="en">English</option>
      <option value="fr">Français</option>
      <option value="ar">العربية</option>
    </select>
  );
}

export default LanguageSelector;
