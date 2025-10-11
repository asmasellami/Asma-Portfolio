import Title from "./Title";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        "asma_service", 
        "template_aiz6zp4", 
        form.current,
        "Mb-q9tIPOFl9ee_5i" 
      )
      .then(
        (result) => {
          console.log("Message envoyé ✅", result.text);
          setIsSent(true);
          form.current?.reset();
        },
        (error) => {
          console.log("Erreur ❌", error.text);
        }
      );
  };

  return (
    <div id="Contact" className="bg-base-300 p-10 mb-10 md:mb-32">
      <div className="max-w-6xl mx-auto">
        <Title title="Contactez-moi" />
        <br />

        <motion.div
          className="flex flex-col md:flex-row gap-8"
          initial="hidden"
          animate={isMounted ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Informations de contact */}
          <motion.div
            className="w-full md:w-1/2 bg-base-100 p-6 rounded-xl shadow-lg"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-bold mb-6">Mes coordonnées</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Mail className="text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-base-content/80">
                    asma.sellami@esprit.tn
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Téléphone</h3>
                  <p className="text-base-content/80">+216 96 943 934</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Localisation</h3>
                  <p className="text-base-content/80">Tunis, Tunisie</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Formulaire de contact */}
          <motion.div
            className="w-full md:w-1/2 bg-base-100 p-6 rounded-xl shadow-lg"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-bold mb-6">Envoyez-moi un message</h2>

            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Nom complet</span>
                </label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Votre nom"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="Votre email"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  name="message"
                  className="textarea textarea-bordered h-32"
                  placeholder="Votre message"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-accent w-full">
                Envoyer le message
              </button>

           {isSent && (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    className="alert alert-success shadow-lg mt-4"
  >
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-current shrink-0 h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>Message envoyé avec succès ! 💌</span>
    </div>
  </motion.div>
)}

            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
