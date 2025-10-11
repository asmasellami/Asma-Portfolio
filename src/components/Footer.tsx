import { Container } from "lucide-react"
import { useContext } from "react";
import { LanguageContext } from "../i18n/LanguageContext";

const Footer = () => {
    const langCtx = useContext(LanguageContext);
    const t = langCtx?.t ?? ((s: string) => s);
    return (
        <footer className="footer footer-center  p-10">
            <aside>

                <Container className="w-10 h-10" />
                <p className="font-bold">
                    Asma
                    <span className="text-accent">Sellami</span>
                </p>
                <p>Copyright © {new Date().getFullYear()} -  {t("footer.rights")}</p>
            </aside>
            
        </footer>
    )
}

export default Footer
