export type Lang = "fr" | "en";

export const translations: Record<Lang, Record<string, string>> = {
  fr: {
    // Navbar
    "nav.brand.first": "Asma",
    "nav.brand.last": "Sellami",
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.skills": "Mes compétences",
    "nav.experiences": "Mes expériences",
    "nav.projects": "Mes projets",
    "nav.contact": "Contact",
    "nav.lang.fr": "Français",
    "nav.lang.en": "Anglais",

    // Home
    "home.greeting": "Bonjour, je suis",
    "home.name": "Asma Sellami",
    "home.subtitle":
      "Étudiante passionnée par le développement web et les nouvelles technologies.",
    "home.subtitle2": "Toujours curieuse d’apprendre et de créer.",
    "home.subtitle3": "N'hésitez pas à me contacter pour collaborer sur des projets.",
    "home.contactMe": "Contactez-moi",
    "home.previewCV": "Aperçu CV",
    "home.photoAlt": "Photo de profil",

    // About
    "about.title": "À propos de moi",
    "about.path": "Mon Parcours",
    "about.badge": "Full Stack Developer",
    "about.bio.1":
      "Étudiante en 2ème année du cycle ingénieur à ESPRIT, spécialité TWIN (Technologies du Web et de l’Internet), je suis passionnée par le développement web et les nouvelles technologies.",
    "about.bio.2":
      "Mon objectif est de mettre en pratique mes compétences techniques, de participer à des projets concrets et d’évoluer dans un environnement stimulant qui favorise l’apprentissage et l’innovation.",
    "about.strengths": "Mes Forces",
    "about.strength.logic": "Esprit logique et analytique",
    "about.strength.logic.desc":
      "Capacité à comprendre et résoudre efficacement les problèmes techniques",
    "about.strength.dev": "Passion pour le développement web",
    "about.strength.dev.desc":
      "Création d’applications modernes et fonctionnelles avec une attention aux détails",
    "about.strength.motivation": "Motivation et ambition",
    "about.strength.motivation.desc":
      "Toujours prête à relever de nouveaux défis et à apprendre",

    // Skills
    "skills.title": "Mes Compétences",
    "skills.cat.languages": "Langages de programmation",
    "skills.cat.frameworks": "Framework",
    "skills.cat.databases": "Base de données",
    "skills.cat.tools": "Outils",
    "skills.level.advanced": "Avancé",
    "skills.level.intermediate": "Intermédiaire",
    "skills.level.beginner": "Débutant",

    // Experiences
    "exp.title": "Expériences Professionnelles",
    "exp.section": "Mes Expériences",
    "exp.1.role": "Stage d’été",
    "exp.1.company": "One Tech Business Solutions - Tunis",
    "exp.1.period": "Juillet 2025 – Août 2025",
    "exp.1.d1":
      "Développement d’un chatbot interne pour la gestion documentaire et l’automatisation des réponses aux questions des employés, avec un système de NLP pour améliorer la qualité des réponses.",
    "exp.1.d2":
      "Développement back-end avec Flask et Spring Boot, front-end avec Angular et gestion de la base de données MySQL.",
    "exp.2.role": "Stage de fin d’études",
    "exp.2.company": "Laevitas - Tunis",
    "exp.2.period": "Janvier 2024 – Juin 2024",
    "exp.2.d1":
      "Conception et développement d’une application web et mobile pour la visualisation des données de cryptomonnaie en temps réel, avec un système de notifications instantanées et un chatbot pour les utilisateurs.",
    "exp.2.d2":
      "Développement back-end avec Spring Boot et Flask pour le chatbot, front-end avec Angular et Flutter pour l’application mobile, et gestion des données avec MySQL.",
    "exp.3.role": "Stage de perfectionnement",
    "exp.3.company": "CODIX - Tunis",
    "exp.3.period": "Janvier 2023 – Février 2023",
    "exp.3.d1": "Conception et réalisation d’une application de gestion des stagiaires.",
    "exp.3.d2":
      "Développement back-end avec .NET, front-end avec Angular et gestion des données avec MySQL.",
    "exp.4.role": "Stage d’initiation",
    "exp.4.company": "Banque Nationale Agricole (BNA) - Tunis",
    "exp.4.period": "Janvier 2022 – Février 2022",
    "exp.4.d1":
      "Intégration dans l’entreprise, découverte du milieu professionnel et observation du fonctionnement de la banque.",

    // Projects
    "projects.title": "Mes Projets",
    "projects.1.title": "Crypto Platform",
    "projects.1.desc":
      "Application web et mobile pour visualiser et analyser les crypto-monnaies, intégrant un chatbot intelligent. Gestion des utilisateurs, alertes personnalisées et notifications en temps réel.",
    "projects.2.title": "Chatbot Interne",
    "projects.2.desc":
      "Chatbot interne pour gérer les documents et automatiser les réponses aux questions des employés. Dashboard admin pour gérer intents, utilisateurs et fichiers.",
    "projects.3.title": "Gestion des Ressources Humaines",
    "projects.3.desc":
      "Application web pour gérer les employés, événements, formations et projets. Inclut authentification sécurisée, gestion des équipes, systèmes de feedback et outils RH avancés.",
    "projects.4.title": "Gestion des Stagiaires",
    "projects.4.desc":
      "Application web pour centraliser la gestion des stagiaires et des demandes de stage, avec suivi et notifications automatiques.",

    // Contact
    "contact.title": "Contactez-moi",
    "contact.info": "Mes coordonnées",
    "contact.email": "Email",
    "contact.phone": "Téléphone",
    "contact.location": "Localisation",
    "contact.location.value": "Tunis, Tunisie",
    "contact.form.title": "Envoyez-moi un message",
    "contact.form.fullname": "Nom complet",
    "contact.form.fullname.placeholder": "Votre nom",
    "contact.form.email": "Email",
    "contact.form.email.placeholder": "Votre email",
    "contact.form.message": "Message",
    "contact.form.message.placeholder": "Votre message",
    "contact.form.submit": "Envoyer le message",
    "contact.form.success": "Message envoyé avec succès ! 💌",

    // Footer
    "footer.rights": "Tous droits réservés",
  },
  en: {
    // Navbar
    "nav.brand.first": "Asma",
    "nav.brand.last": "Sellami",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.experiences": "Experience",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.lang.fr": "French",
    "nav.lang.en": "English",

    // Home
    "home.greeting": "Hello, I'm",
    "home.name": "Asma Sellami",
    "home.subtitle": "Passionate web development student driven by creativity and innovation.",
    "home.subtitle2": "Constantly exploring new technologies and learning something new every day.",
    "home.subtitle3": "Feel free to contact me to collaborate on projects.",
    "home.contactMe": "Contact me",
    "home.previewCV": "Preview CV",
    "home.photoAlt": "Profile photo",

    // About
    "about.title": "About me",
    "about.path": "My Journey",
    "about.badge": "Full Stack Developer",
    "about.bio.1":
      "Second-year engineering student at ESPRIT, majoring in TWIN (Web and Internet Technologies), passionate about web development and new technologies.",
    "about.bio.2":
      "My goal is to apply my technical skills, contribute to real-world projects, and grow in a stimulating environment that promotes learning and innovation.",
    "about.strengths": "My Strengths",
    "about.strength.logic": "Logical and analytical mindset",
    "about.strength.logic.desc":
      "Ability to understand and efficiently solve technical problems",
    "about.strength.dev": "Passion for web development",
    "about.strength.dev.desc":
      "Building modern and functional applications with attention to detail",
    "about.strength.motivation": "Motivation and ambition",
    "about.strength.motivation.desc": "Always ready to take on new challenges and learn",

    // Skills
    "skills.title": "My Skills",
    "skills.cat.languages": "Programming languages",
    "skills.cat.frameworks": "Frameworks",
    "skills.cat.databases": "Databases",
    "skills.cat.tools": "Tools",
    "skills.level.advanced": "Advanced",
    "skills.level.intermediate": "Intermediate",
    "skills.level.beginner": "Beginner",

    // Experiences
    "exp.title": "Professional Experience",
    "exp.section": "My Experience",
    "exp.1.role": "Summer internship",
    "exp.1.company": "One Tech Business Solutions - Tunis",
    "exp.1.period": "July 2025 – August 2025",
    "exp.1.d1":
      "Developed an internal chatbot for document management and automating responses to employees questions, with an NLP system to improve answer quality.",
    "exp.1.d2":
      "Back-end development with Flask and Spring Boot, front-end with Angular and database management with MySQL.",
    "exp.2.role": "Final-year internship",
    "exp.2.company": "Laevitas - Tunis",
    "exp.2.period": "January 2024 – June 2024",
    "exp.2.d1":
      "Designed and developed a web and mobile application for real-time cryptocurrency data visualization, with instant notifications and a user chatbot.",
    "exp.2.d2":
      "Back-end with Spring Boot and Flask for the chatbot, front-end with Angular and Flutter for the mobile app, and data management with MySQL.",
    "exp.3.role": "Advanced training internship",
    "exp.3.company": "CODIX - Tunis",
    "exp.3.period": "January 2023 – February 2023",
    "exp.3.d1": "Designed and built an intern management application.",
    "exp.3.d2":
      "Back-end with .NET, front-end with Angular, and data management with MySQL.",
    "exp.4.role": "Initiation internship",
    "exp.4.company": "Banque Nationale Agricole (BNA) - Tunis",
    "exp.4.period": "January 2022 – February 2022",
    "exp.4.d1":
      "Integration into the company, discovering the professional environment and observing how the bank operates.",

    // Projects
    "projects.title": "My Projects",
    "projects.1.title": "Crypto Platform",
    "projects.1.desc":
      "Web and mobile application to visualize and analyze cryptocurrencies, integrating an intelligent chatbot. Includes user management, personalized alerts and real-time notifications.",
    "projects.2.title": "Internal Chatbot",
    "projects.2.desc":
      "Internal chatbot to manage documents and automate responses to employees' questions. Admin dashboard to manage intents, users and files.",
    "projects.3.title": "Human Resources Management",
    "projects.3.desc":
      "Web application to manage employees, events, training and projects. Includes secure authentication, team management, feedback systems and advanced HR tools.",
    "projects.4.title": "Internship Management",
    "projects.4.desc":
      "Web application to centralize the management of interns and internship requests, with tracking and automatic notifications.",

    // Contact
    "contact.title": "Contact me",
    "contact.info": "My contact details",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.location": "Location",
    "contact.location.value": "Tunis, Tunisia",
    "contact.form.title": "Send me a message",
    "contact.form.fullname": "Full name",
    "contact.form.fullname.placeholder": "Your name",
    "contact.form.email": "Email",
    "contact.form.email.placeholder": "Your email",
    "contact.form.message": "Message",
    "contact.form.message.placeholder": "Your message",
    "contact.form.submit": "Send message",
    "contact.form.success": "Message sent successfully! 💌",

    // Footer
    "footer.rights": "All rights reserved",
  },
};
