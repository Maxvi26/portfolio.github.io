import "./contact.css";
import { useTranslation } from "react-i18next";
import { Mail, MapPin, Send } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
    const { t } = useTranslation();
    const email = "vignon.maxime@yahoo.fr";
    return (
        <section className="contact" id="contact">
            <div className="contact-container">
                {/* LEFT SIDE */}
                <div className="contact-profile">
                    <div className="image-wrapper">
                        <img
                            src="/me1.png"
                            alt="Maxime - Software Engineer"
                        />
                        <div className="status">
                            <span></span>
                            {t("contact.available")}
                        </div>
                    </div>
                    <div className="availability">
                        <span className="globe">
                            🌍
                        </span>
                        <p>
                            {t("contact.availability")}
                        </p>
                    </div>
                    <h2>
                        {t("contact.title")}
                    </h2>
                    <p>
                        {t("contact.description")}
                    </p>
                    <div className="contact-links">
                        <a href={`mailto:${email}`}>
                            <Mail size={20} />
                            {t("contact.email")}
                        </a>
                        <a
                            href="https:/linkedin.com/in/maximevignon"
                            target="_blank"
                        >
                            <FaLinkedin size={20} />
                            LinkedIn
                        </a>
                    </div>
                    <div className="location">
                        <MapPin size={18} />
                        France
                    </div>
                </div>
                {/* RIGHT SIDE */}
                <div className="contact-terminal">
                    <div className="terminal-header">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="terminal-body">
                        <p>
                            <span className="green">
                                $
                            </span>{" "}
                            npm run contact
                        </p>
                        <p>
                            <span className="blue">
                                developer
                            </span>
                            :
                            {" {"}
                        </p>
                        <p className="indent">
                            name:
                            <span>
                                "Maxime Vignon"
                            </span>
                        </p>
                        <p className="indent">
                            role:
                            <span>
                                "{t("contact.titleJob")}"
                            </span>
                        </p>
                        <p>
                            {"}"}
                        </p><p>
                            <span className="green">$</span>
                            {t("contact.build")}
                        </p>
                        <a
                            className="contact-button"
                            href={`mailto:${email}?subject=Contact depuis mon portfolio`}
                        >
                            <Send size={18} />
                            {t("contact.button")}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;