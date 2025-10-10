import Title from "./Title"


import onetech from "../assets/companies/onetech.png";
import laevitas from "../assets/companies/laevitas.png";
import codix from "../assets/companies/codix.png";
import bna from "../assets/companies/bna.png";

const experiences = [
  {
    id: 1,
    role: "Stage d’été",
    company: "One Tech Business Solutions - Tunis",
    period: "Juillet 2025 – Août 2025",
    description: [
      "Développement d’un chatbot interne pour la gestion documentaire et l’automatisation des réponses aux questions des employés, avec un système de NLP pour améliorer la qualité des réponses.",
      "Développement back-end avec Flask et Spring Boot, front-end avec Angular et gestion de la base de données MySQL."
    ],
    image: onetech, // Assure-toi d'importer l'image correspondante
  },
  {
    id: 2,
    role: "Stagede fin d’études",
    company: "Laevitas - Tunis",
    period: "Janvier 2024 – Juin 2024",
    description: [
      "Conception et développement d’une application web et mobile pour la visualisation des données de cryptomonnaie en temps réel, avec un système de notifications instantanées et un chatbot pour les utilisateurs.",
      "Développement back-end avec Spring Boot et Flask pour le chatbot, front-end avec Angular et Flutter pour l’application mobile, et gestion des données avec MySQL."
    ],
    image: laevitas,
  },
  {
    id: 3,
    role: "Stage de perfectionnement",
    company: "CODIX - Tunis",
    period: "Janvier 2023 – Février 2023",
    description: [
      "Conception et réalisation d’une application de gestion des stagiaires.",
      "Développement back-end avec .NET, front-end avec Angular et gestion des données avec MySQL."
    ],
    image: codix,
  },
  {
    id: 4,
    role: "Stage d’initiation",
    company: "Banque Nationale Agricole (BNA) - Tunis",
    period: "Janvier 2022 – Février 2022",
    description: [
      "Intégration dans l’entreprise, découverte du milieu professionnel et observation du fonctionnement de la banque."
    ],
    image: bna,
  }
];


const Experiences = () => {
    return (
        <div id="Experiences" className="bg-base-300 p-10 mb-10 md:mb-32">
            <div className="max-w-6xl mx-auto">
                <Title title="Expériences Professionnelles" />
                <br /><br />

                <div className="bg-base-100 p-6 rounded-2xl shadow-xl">
                    <h2 className="text-2xl font-bold mb-6 pb-4 border-b border-base-300 flex items-center">
                        <span>Mes Expériences</span>
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
                                            alt={experience.company}
                                            className="object-cover h-14 w-14 rounded-lg"
                                        />
                                        <div>
                                            <h3 className="text-xl font-bold">
                                                {experience.role}
                                                <span className="text-accent"> @ {experience.company}</span>
                                            </h3>
                                            <span className="text-sm text-base-content/70">{experience.period}</span>
                                            <ul className="mt-4 space-y-3">
                                                {experience.description.map((desc, index) => (
                                                    <li key={index} className="flex items-start">
                                                        <span className="text-accent mr-2 mt-1">▹</span>
                                                        <span>{desc}</span>
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