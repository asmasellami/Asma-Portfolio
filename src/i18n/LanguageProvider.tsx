import React, { useCallback, useEffect, useMemo, useState } from "react";
import { translations, Lang } from "./translations";
import { LanguageContext, LanguageContextType } from "./LanguageContext.tsx";

const STORAGE_KEY = "app.lang";

const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = typeof window !== "undefined" ? (localStorage.getItem(STORAGE_KEY) as Lang | null) : null;
    return saved === "en" || saved === "fr" ? saved : "fr";
  });

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch (e) {
      void e;
    }
  }, []);

  useEffect(() => {
    const handler = () => {
      const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (saved && (saved === "en" || saved === "fr")) {
        setLangState(saved);
      }
    };
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, []);

  const t = useMemo(() => {
    const dict = translations[lang];
    return (key: string) => dict[key] ?? key;
  }, [lang]);

  const value: LanguageContextType = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export default LanguageProvider;
