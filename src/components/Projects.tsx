import Title from "./Title"
import { useContext } from "react";
import { LanguageContext } from "../i18n/LanguageContext";
import img1 from '../assets/projects/1.png';
import img2 from '../assets/projects/2.png';
import img3 from '../assets/projects/work.png';
import img4 from '../assets/projects/intern.png';
import img5 from '../assets/projects/deepskyn.png';
import { Github } from "lucide-react";
const projects = [
  {
    id: 1,
        titleKey: "projects.1.title",
        descriptionKey: "projects.1.desc",
    technologies: ["Angular", "Flutter", "Spring Boot", "MySQL", "Flask"],
    // demoLink: "#",
    repoLink: "https://github.com/asmasellami/Crypto-Platform",
    image: img1,
  },
  {
    id: 2,
        titleKey: "projects.2.title",
        descriptionKey: "projects.2.desc",
    technologies: ["Angular", "Spring Boot", "Flask", "MySQL"],
    //demoLink: "#",
    repoLink: "https://github.com/asmasellami/Chatbot",
    image: img2,
  },
  {
    id: 3,
        titleKey: "projects.3.title",
        descriptionKey: "projects.3.desc",
    technologies: ["Symfony", "MySQL", "JavaScript", "Bootstrap"],
    //demoLink: "#",
    repoLink: "https://github.com/asmasellami/PIDevWorksphereWeb",
    image: img3,
  },
  {
    id: 4,
        titleKey: "projects.4.title",
        descriptionKey: "projects.4.desc",
    technologies: ["Angular", ".NET", "MySQL"],
    //demoLink: "#",
    repoLink: "https://github.com/asmasellami/Gestion-Stagiaire",
    image: img4,
  },
  {
    id: 5,
        titleKey: "projects.5.title",
        descriptionKey: "projects.5.desc",
    technologies: ["React", "TypeScript", "NestJS", "PostgreSQL", "Prisma", "Docker", "Kubernetes"],
    repoLink: "https://github.com/DeepSkyn",
    image: img5,
  }
];

const Projects = () => {
        const langCtx = useContext(LanguageContext);
        const t = langCtx?.t ?? ((s: string) => s);
    return (
        <div className="mt-10" id="Projects">
                        <Title title={t("projects.title")} />
            <div className="grid md:grid-cols-3 gap-4">
                {projects.map((project) => (
                    <div key={project.id} className="bg-base-300 p-5 rounded-xl shadow-lg flex flex-col h-full">
                        <div className="flex-shrink-0">
                            <img
                                                                src={project.image}
                                                                alt={t(project.titleKey)}
                                className="w-full rounded-xl h-56 object-cover"
                            />
                        </div>
                        <div className="flex-grow flex flex-col">
                            <div className="flex-grow">
                                <h1 className="my-2 font-bold">
                                                                        {t(project.titleKey)}
                                </h1>
                                                                <p className="text-sm">{t(project.descriptionKey)}</p>
                            </div>
                            
                            <div className="flex flex-wrap gap-2 my-3">
                                {project.technologies.map((tech) => (
                                    <span key={tech} className="badge badge-accent badge-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            
                            <div className="flex mt-auto">
                               {/*  <a className="btn btn-accent w-2/3" href={project.demoLink}>
                                    Demo
                                    <Video className="w-4" />
                                </a> */}
                                <a className="btn btn-neutral w-1/3 ml-2" href={project.repoLink}>
                                    <Github className="w-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects