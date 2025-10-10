import Title from "./Title"
import img1 from '../assets/projects/1.png';
import img2 from '../assets/projects/2.png';
import img3 from '../assets/projects/3.avif';
import img4 from '../assets/projects/5.png';
import { Github, Video } from "lucide-react";
const projects = [
  {
    id: 1,
    title: "Crypto Platform ",
    description: "Application web et mobile pour visualiser et analyser les crypto-monnaies, intégrant un chatbot intelligent. Gestion des utilisateurs, alertes personnalisées et notifications en temps réel.",
    technologies: ["Angular", "Flutter", "Spring Boot", "MySQL", "Flask", "API REST / WebSocket"],
    demoLink: "#",
    repoLink: "https://github.com/asmasellami/Crypto-Platform",
    image: img1,
  },
  {
    id: 2,
    title: "Chatbot Interne",
    description: "Chatbot interne pour gérer les documents et automatiser les réponses aux questions des employés. Dashboard admin pour gérer intents, utilisateurs et fichiers.",
    technologies: ["Angular", "Spring Boot", "Python / Flask", "MySQL", "API REST"],
    demoLink: "#",
    repoLink: "https://github.com/asmasellami/Chatbot",
    image: img2,
  },
  {
    id: 3,
    title: "Gestion des Ressources Humaines",
    description: "Application web pour gérer les employés, événements, formations et projets. Inclut authentification sécurisée, gestion des équipes, systèmes de feedback et outils RH avancés.",
    technologies: ["Symfony", "MySQL", "JavaScript", "Bootstrap"],
    demoLink: "#",
    repoLink: "https://github.com/asmasellami/PIDevWorksphereWeb",
    image: img3,
  },
  {
    id: 4,
    title: "Gestion des Stagiaires",
    description: "Application web pour centraliser la gestion des stagiaires et des demandes de stage, avec suivi et notifications automatiques.",
    technologies: ["Angular CLI", "AngularJS", "Spring Boot", "MySQL", "API REST"],
    demoLink: "#",
    repoLink: "https://github.com/asmasellami/Gestion-Stagiaire",
    image: img4,
  }
];

const Projects = () => {
    return (
        <div className="mt-10" id="Projects">
            <Title title="Mes Projets" />
            <div className="grid md:grid-cols-3 gap-4">
                {projects.map((project) => (
                    <div key={project.id} className="bg-base-300 p-5 rounded-xl shadow-lg flex flex-col h-full">
                        <div className="flex-shrink-0">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full rounded-xl h-56 object-cover"
                            />
                        </div>
                        <div className="flex-grow flex flex-col">
                            <div className="flex-grow">
                                <h1 className="my-2 font-bold">
                                    {project.title}
                                </h1>
                                <p className="text-sm">{project.description}</p>
                            </div>
                            
                            <div className="flex flex-wrap gap-2 my-3">
                                {project.technologies.map((tech) => (
                                    <span key={tech} className="badge badge-accent badge-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            
                            <div className="flex mt-auto">
                                <a className="btn btn-accent w-2/3" href={project.demoLink}>
                                    Demo
                                    <Video className="w-4" />
                                </a>
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