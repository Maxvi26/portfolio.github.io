import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import TerminalCard from "@/components/ui/TerminalCard";
import "./Hero.css";

const Hero = () => {
    const { t } = useTranslation();
    return (
        <section className="hero">
            <div className="hero-container">
                {/* Left content */}
                <div className="hero-content">
                    <motion.p
                        className="hero-intro"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {t("hero.hello")}
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Maxime Vignon
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        {t("hero.title")}
                    </motion.h2>
                   {/* <motion.p
                        className="hero-description"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        {t("hero.description")}
                    </motion.p>*/}
                    <motion.div
                        className="hero-buttons"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.9 }}
                    >
                        <Link
                            to="/about"
                            className="primary-button"
                        >
                            {t("hero.seeMore")}
                        </Link>
                        <a
                            href="documents/CV_VIGNON.pdf"
                            className="secondary-button"
                            target="_blank"
                        >
                            <Download size={18} />
                            CV
                        </a>
                    </motion.div>
                    <div className="hero-socials">
                        <a href="https://linkedin.com/in/maximevignon" target="_blank">
                            <FaLinkedin size={22} />
                        </a>
                    </div>
                </div>

                {/* Right terminal */}
                <TerminalCard
                    lines={[
                        {
                            command: "whoami",
                            result: t("hero.title")
                        },
                        {
                            command: "status",
                            result: t("hero.status")
                        },
                        {
                            command: "Languages",
                            result: "Français English"
                        }
                    ]}
                />
            </div>
        </section>
    );
};


export default Hero;