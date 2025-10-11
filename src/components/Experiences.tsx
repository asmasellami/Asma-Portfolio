import Title from "./Title"
import { useContext } from "react";
import { LanguageContext } from "../i18n/LanguageContext";


import onetech from "../assets/companies/onetech.png";
import laevitas from "../assets/companies/laevitas.png";
import codix from "../assets/companies/codix.png";
import bna from "../assets/companies/bna.png";

const experiences = [
  {
    id: 1,
    roleKey: "exp.1.role",
    companyKey: "exp.1.company",
    periodKey: "exp.1.period",
    descriptionKeys: ["exp.1.d1", "exp.1.d2"],
    image: onetech, 
  },
  {
    id: 2,
    roleKey: "exp.2.role",
    companyKey: "exp.2.company",
    periodKey: "exp.2.period",
    descriptionKeys: ["exp.2.d1", "exp.2.d2"],
    image: laevitas,
  },
  {
    id: 3,
    roleKey: "exp.3.role",
    companyKey: "exp.3.company",
    periodKey: "exp.3.period",
    descriptionKeys: ["exp.3.d1", "exp.3.d2"],
    image: codix,
  },
  {
    id: 4,
    roleKey: "exp.4.role",
    companyKey: "exp.4.company",
    periodKey: "exp.4.period",
    descriptionKeys: ["exp.4.d1"],
    image: bna,
  }
];


const Experiences = () => {
    const langCtx = useContext(LanguageContext);
    const t = langCtx?.t ?? ((s: string) => s);
    return (
        <div id="Experiences" className="bg-base-300 p-10 mb-10 md:mb-32">
            <div className="max-w-6xl mx-auto">
                <Title title={t("exp.title")} />
                <br /><br />

                <div className="bg-base-100 p-6 rounded-2xl shadow-xl">
                    <h2 className="text-2xl font-bold mb-6 pb-4 border-b border-base-300 flex items-center">
                        <span>{t("exp.section")}</span>
                    </h2>
                    <div className="space-y-8">
                        {experiences.map((experience) => (
                            <div
                                key={experience.id}
                                className="group relative pl-8 pb-8 border-l-2 border-accent last:border-transparent last:pb-0"
                            >
                                <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-accent border-4 border-base-100"></div>
                                <div className="bg-base-200 p-6 rounded-xl shadow-md group-hover:shadow-lg transition-shadow duration-300">
                                    <div className="flex items-start gap-4">
                                        <img
                                            src={experience.image}
                                            alt={t(experience.companyKey)}
                                            className="object-cover h-14 w-16 rounded-lg"
                                        />
                                        <div>
                                            <h3 className="text-xl font-bold">
                                                {t(experience.roleKey)}
                                                <span className="text-accent"> @ {t(experience.companyKey)}</span>
                                            </h3>
                                            <span className="text-sm text-base-content/70">{t(experience.periodKey)}</span>
                                            <ul className="mt-4 space-y-3">
                                                {experience.descriptionKeys.map((desc, index) => (
                                                    <li key={index} className="flex items-start">
                                                        <span className="text-accent mr-2 mt-1">▹</span>
                                                        <span>{t(desc)}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experiences