import Title from "./Title";
import { motion } from "framer-motion";
import { useEffect, useState, useContext } from "react";
import { LanguageContext } from "../i18n/LanguageContext";

// Importez vos images comme dans Experiences.tsx
import imgPYTHON from "../assets/techno/python.png";
import imgSQL from "../assets/techno/sql.png";
import imgJAVA from "../assets/techno/java.png";
import imgPHP from "../assets/techno/php.png";
import imgJS from "../assets/techno/javascript.png";
import imgMONGODB from "../assets/techno/mongodb.png";
import imgSPRING from "../assets/techno/Spring.png";
import imgSYMFONY from "../assets/techno/symfony.png";
import imgFLUTTER from "../assets/techno/flutter.png";
import imgTS from "../assets/techno/ts.png";
import imgANGULAR from "../assets/techno/angular.png";
import imgDJANGO from "../assets/techno/dj.svg";
import imgDOTNET from "../assets/techno/net.png";
import imgFIREBASE from "../assets/techno/firebase.png";
import imgGIT from "../assets/techno/git.png";
import imgGITHUB from "../assets/techno/github.png";
import imgFLUTTERFLOW from "../assets/techno/flow.jfif";
import imgPOSTGRESQL from "../assets/techno/postgresql.png";
import imgREACT from "../assets/techno/react.png";
import imgDOCKER from "../assets/techno/docker.png";
import imgJENKINS from "../assets/techno/jenkins.png";
import imgNESTJS from "../assets/techno/nestjs.png";
import imgSONARQUBE from "../assets/techno/sonarqube.png";
import imgPROMETHEUS from "../assets/techno/prometheus.png";
import imgGRAFANA from "../assets/techno/grafana.jfif";
import imgKUBERNETES from "../assets/techno/kubernetes.png";


const Competences = () => {
    const [isMounted, setIsMounted] = useState(false);
    const langCtx = useContext(LanguageContext);
    const t = langCtx?.t ?? ((s: string) => s);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };
/* 
    const competences = [
        {
            category: "Langages de Programmation",
            skills: [
                { name: "Python", image: imgPYTHON, level: "Avancé" },
                { name: "R", image: imgR, level: "Intermédiaire" },
                { name: "Java", image: imgJAVA, level: "Intermédiaire" },
                { name: "PHP", image: imgPHP, level: "Intermédiaire" },
                { name: "SQL", image: imgSQL, level: "Avancé" }
            ]
        },
        {
            category: "Machine Learning & IA",
            skills: [
                { name: "Régression/Classification", image: imgPYTHON, level: "Avancé" },
                { name: "Clustering", image: imgPYTHON, level: "Avancé" },
                { name: "Deep Learning", image: imgTENSORFLOW, level: "Intermédiaire" },
                { name: "LLM", image: imgPYTHON, level: "Intermédiaire" },
                { name: "NLP", image: imgPYTHON, level: "Intermédiaire" },
                
            ]
        },
        {
            category: "Développement Web & API",
            skills: [
                { name: "Flask", image: imgFLASK, level: "Avancé" },
                { name: "FastAPI", image: imgFASTAPI, level: "Intermédiaire" },
                { name: "Spring Boot", image: imgSPRING, level: "Intermédiaire" },
                { name: "Symfony", image: imgSYMFONY, level: "Intermédiaire" },
                { name: "React", image: imgJS, level: "Intermédiaire" },
                { name: "Flutter", image: imgFLUTTER, level: "Intermédiaire" }
            ]
        },
        {
            category: "Base de Données",
            skills: [
                { name: "MySQL", image: imgSQL, level: "Avancé" },
                { name: "PostgreSQL", image: imgPOSTGRESQL, level: "Avancé" },
                { name: "MongoDB", image: imgMONGODB, level: "Intermédiaire" },
                { name: "Hadoop", image: imgHADOOP, level: "Intermédiaire" }
            ]
        },
        {
            category: "MLOps & CI/CD",
            skills: [
                { name: "Docker", image: imgDOCKER, level: "Intermédiaire" },
                { name: "MLflow", image: imgMLFLOW, level: "Intermédiaire" },
                { name: "Jenkins", image: imgJENKINS, level: "Intermédiaire" },
                { name: "Makefile", image: imgPYTHON, level: "Intermédiaire" }
            ]
        },
        {
            category: "DataViz & BI",
            skills: [
                { name: "Power BI", image: imgPOWERBI, level: "Avancé" },
                { name: "Google Looker Studio", image: imgGCP, level: "Intermédiaire" }
            ]
        }
    ];
 */

        const competences = [
  {
        category: t("skills.cat.languages"),
    skills: [
            { name: "Java", image: imgJAVA, level: t("skills.level.intermediate") },
            { name: "JavaScript", image: imgJS, level: t("skills.level.intermediate") },
            { name: "TypeScript", image: imgTS, level: t("skills.level.intermediate") },
            { name: "PHP", image: imgPHP, level: t("skills.level.intermediate") },
            { name: "Python", image: imgPYTHON, level: t("skills.level.intermediate") }
    ]
  },
  {
        category: t("skills.cat.frameworks"),
    skills: [
            { name: "Angular", image: imgANGULAR, level: t("skills.level.intermediate") },
            { name: "React", image: imgREACT, level: t("skills.level.intermediate") },
            { name: "Spring Boot", image: imgSPRING, level: t("skills.level.intermediate") },
            { name: "Symfony", image: imgSYMFONY, level: t("skills.level.intermediate") },
            { name: "Flutter", image: imgFLUTTER, level: t("skills.level.intermediate") },
            { name: "FlutterFlow", image: imgFLUTTERFLOW, level: t("skills.level.intermediate") },
            { name: "Django", image: imgDJANGO, level: t("skills.level.intermediate") },
            { name: ".NET", image: imgDOTNET, level: t("skills.level.intermediate") },
            { name: "NestJS", image: imgNESTJS, level: t("skills.level.intermediate") }
    ]
  },
  {
        category: t("skills.cat.databases"),
    skills: [
            { name: "MySQL", image: imgSQL, level: t("skills.level.intermediate") },
            { name: "MongoDB", image: imgMONGODB, level: t("skills.level.intermediate") },
            { name: "PostgreSQL", image: imgPOSTGRESQL, level: t("skills.level.intermediate") },
            { name: "Firebase", image: imgFIREBASE, level: t("skills.level.intermediate") }
    ]
  },
  {
        category: t("skills.cat.tools"),
    skills: [
            { name: "Git", image: imgGIT, level: t("skills.level.intermediate") },
            { name: "GitHub", image: imgGITHUB, level: t("skills.level.intermediate") },
            { name: "Docker", image: imgDOCKER, level: t("skills.level.intermediate") },
            { name: "Kubernetes", image: imgKUBERNETES, level: t("skills.level.intermediate") },
            { name: "Jenkins", image: imgJENKINS, level: t("skills.level.intermediate") },
            { name: "SonarQube", image: imgSONARQUBE, level: t("skills.level.intermediate") },
            { name: "Prometheus", image: imgPROMETHEUS, level: t("skills.level.intermediate") },
            { name: "Grafana", image: imgGRAFANA, level: t("skills.level.intermediate") }
    ]
  },
  /* {
    category: "MLOps & CI/CD",
    skills: [
      { name: "Docker", image: imgDOCKER, level: "Intermédiaire" },
      { name: "MLflow", image: imgMLFLOW, level: "Intermédiaire" },
      { name: "Jenkins", image: imgJENKINS, level: "Intermédiaire" },
      { name: "Makefile", image: imgPYTHON, level: "Intermédiaire" }
    ]
  } */
];

    return (
    <div id="Competences" className="bg-base-100 p-10 mb-10 md:mb-32"> {/* Changé de bg-base-300 à bg-base-100 */}
        <div className="max-w-6xl mx-auto">
            <Title title={t("skills.title")} />
            <br /><br />

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial="hidden"
                animate={isMounted ? "visible" : "hidden"}
                variants={containerVariants}
            >
                {competences.map((competence, index) => (
                    <motion.div
                        key={index}
                        className="bg-base-300 p-6 rounded-2xl shadow-lg border border-base-200"
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                    >
                        <h2 className="text-xl font-bold mb-6 pb-2 border-b border-accent text-accent">
                            {competence.category}
                        </h2>
                        <div className="grid grid-cols-2 gap-4">
                            {competence.skills.map((skill, skillIndex) => (
                                <div key={skillIndex} className="flex flex-col items-center justify-center gap-2 p-3 rounded-lg bg-base-200 hover:bg-base-100 transition-colors">
                                    <div className="w-12 h-12 p-1 rounded-full bg-accent/20 flex items-center justify-center"> 
                                        <img 
                                            src={skill.image} 
                                            alt={skill.name}
                                            className="w-8 h-8 object-contain"
                                        />
                                    </div>
                                    <div className="text-center">
                                        <h3 className="font-medium text-sm text-base-content">{skill.name}</h3>
                                       {/*  <div className="w-full bg-base-100 rounded-full h-2 mt-1"> {}
                                            <div 
                                                className="h-2 rounded-full bg-accent" 
                                                style={{ 
                                                    width: skill.level === t("skills.level.advanced") ? "90%" : 
                                                           skill.level === t("skills.level.intermediate") ? "65%" : "40%"
                                                }}
                                            ></div>
                                        </div> */}
                                    </div>
                                  {/*   {<span className="text-sm text-base-content/70">{skill.level}</span> } */}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </div>
);
};

export default Competences;