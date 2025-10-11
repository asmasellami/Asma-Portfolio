import { Mail, Eye } from "lucide-react";
import img from '../assets/asma_im3.jpg';
import cvPdfFR from '../assets/AsmaSellamiCV.pdf'; 
import cvPdfEN from '../assets/AsmaSellamiCV_EN.pdf'; 
import { useContext } from "react";
import { LanguageContext } from "../i18n/LanguageContext";

const Home = () => {
    const langCtx = useContext(LanguageContext);
    const t = langCtx?.t ?? ((s: string) => s);
    // Fonction pour ouvrir l'aperçu du CV
    const handlePreviewCV = () => {
        const currentLang = langCtx?.lang ?? 'fr';
        const pdf = currentLang === 'en' ? cvPdfEN : cvPdfFR;
        window.open(pdf, '_blank');
    };

    return (
        <div id="Home" className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10">
            <div className="flex flex-col">
                <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
                    {t("home.greeting")} {" "} <br />
                    <span className="text-accent text-5xl md:text-5xl"> {t("home.name")}</span>
                </h1>

                <p className="my-4 text-md text-center md:text-left">
                    {t("home.subtitle")}<br />
                    {t("home.subtitle2")} <br />
                    {t("home.subtitle3")}
                </p>

                <div className="flex flex-col md:flex-row gap-4">
                    <a href="#Contact" className="btn btn-accent md:w-fit">
                        <Mail className="w-5 h-5" />
                        {t("home.contactMe")}
                    </a>
                    <button 
                        onClick={handlePreviewCV}
                        className="btn btn-outline md:w-fit"
                    >
                        <Eye className="w-5 h-5" />
                        {t("home.previewCV")}
                    </button>
                </div>
            </div>

            <div className="md:ml-60">
                <img 
                    src={img} 
                    alt={t("home.photoAlt")} 
                    className="w-96 h-96 object-cover border-8 border-accent shadow-xl" 
                    style={{
                        borderRadius: "30% 70% 70% 30% / 67% 62% 38% 33%"
                    }}
                />
            </div>
        </div>
    );
};

export default Home;