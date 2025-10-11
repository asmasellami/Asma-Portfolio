import { Container, Globe } from "lucide-react";
import { useContext, useState } from "react";
import { LanguageContext } from "../i18n/LanguageContext";

const Navbar = () => {
  const langCtx = useContext(LanguageContext);
  const [open, setOpen] = useState(false);
  const t = langCtx?.t ?? ((s: string) => s);
  const lang = langCtx?.lang ?? "fr";

  return (
    <div className="flex justify-center md:justify-between items-center p-4 flex-wrap md:flex-nowrap">
      {/* Logo */}
      <a href="#" className="flex items-center font-bold text-3xl md:text-xl whitespace-nowrap">
        <Container className="mr-2" />
        {t("nav.brand.first")}
        <span className="text-accent">{t("nav.brand.last")}</span>
      </a>

      {/* Liens de navigation */}
      <ul className="hidden md:flex space-x-3 items-center text-sm md:text-base">
        <li>
          <a href="#Home" className="btn btn-sm btn-ghost whitespace-nowrap">
            {t("nav.home")}
          </a>
        </li>
        <li>
          <a href="#About" className="btn btn-sm btn-ghost whitespace-nowrap">
            {t("nav.about")}
          </a>
        </li>
        <li>
          <a href="#Competences" className="btn btn-sm btn-ghost whitespace-nowrap">
            {t("nav.skills")}
          </a>
        </li>
        <li>
          <a href="#Experiences" className="btn btn-sm btn-ghost whitespace-nowrap">
            {t("nav.experiences")}
          </a>
        </li>
        <li>
          <a href="#Projects" className="btn btn-sm btn-ghost whitespace-nowrap">
            {t("nav.projects")}
          </a>
        </li>
        <li>
          <a href="#Contact" className="btn btn-sm btn-ghost whitespace-nowrap">
            {t("nav.contact")}
          </a>
        </li>

        {/* Sélecteur de langue */}
        <li className="relative">
          <button
            onClick={() => setOpen((v) => !v)}
            className="btn btn-sm btn-outline inline-flex flex-row items-center justify-center gap-2 whitespace-nowrap leading-none px-3"
            aria-haspopup="listbox"
            aria-expanded={open}
          >
            <Globe className="w-4 h-4" />
            {lang.toUpperCase()}
          </button>
          {open && (
            <ul
              className="absolute right-0 mt-2 w-40 bg-base-100 rounded-md shadow z-10"
              role="listbox"
            >
              <li>
                <button
                  className={`w-full text-left px-3 py-2 hover:bg-base-200 inline-flex items-center gap-2 ${
                    lang === "fr" ? "text-accent" : ""
                  }`}
                  onClick={() => {
                    langCtx?.setLang("fr");
                    setOpen(false);
                  }}
                >
                  <span>{t("nav.lang.fr")}</span>
                </button>
              </li>
              <li>
                <button
                  className={`w-full text-left px-3 py-2 hover:bg-base-200 inline-flex items-center gap-2 ${
                    lang === "en" ? "text-accent" : ""
                  }`}
                  onClick={() => {
                    langCtx?.setLang("en");
                    setOpen(false);
                  }}
                >
                  <span>{t("nav.lang.en")}</span>
                </button>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
