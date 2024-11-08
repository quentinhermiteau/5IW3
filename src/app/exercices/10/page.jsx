"use client";

import { createContext, useContext, useEffect, useState } from "react";

const translations = {
  en: {
    hello: "Hello!",
    welcome: "Welcome to our app!",
  },
  es: {
    hello: "¡Hola!",
    welcome: "¡Bienvenido a nuestra aplicación!",
  },
  fr: {
    hello: "Bonjour !",
    welcome: "Bienvenue dans notre application !",
  },
  de: {
    hello: "Hallo!",
    welcome: "Willkommen in unserer App!",
  },
};

const languageContext = createContext();

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(null);

  useEffect(() => {
    let lang;
    if (language === null) {
      lang = localStorage.getItem("language") ?? "en";
    } else {
      lang = language;
    }

    setLanguage(lang);
    localStorage.setItem("language", lang);
  }, [language]);

  const changeLanguage = (lang) => setLanguage(lang);

  const translate = (key) => {
    return translations[language]
      ? translations[language][key] ?? "Translation not found"
      : "Language not found";
  };

  if (language === null) {
    return;
  }

  return (
    <languageContext.Provider value={{ language, changeLanguage, translate }}>
      {children}
    </languageContext.Provider>
  );
}

function LanguageSwitcher() {
  const { language, changeLanguage } = useContext(languageContext);

  return (
    <div>
      <select value={language} onChange={(e) => changeLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="fr">Français</option>
        <option value="de">Deutsch</option>
      </select>
    </div>
  );
}

function Greeting() {
  const { translate } = useContext(languageContext);

  return (
    <div>
      <h1>{translate("hello")}</h1>
      <p>{translate("welcome")}</p>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <LanguageSwitcher />
      <Greeting />
    </LanguageProvider>
  );
}
