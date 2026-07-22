import { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import "./Navbar.css";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../context/ThemeContext";


const Navbar = () => {
    const { t, i18n } = useTranslation();
    const { darkMode, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const navLinks = [
        {
            name: t("navbar.home"),
            href: "/",
        },
        {
            name: t("navbar.about"),
            href: "/about",
        },
        {
            name: t("navbar.projects"),
            href: "/projects",
        },
        {
            name: t("navbar.contact"),
            href: "/contact",
        },
    ];
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const changeLanguage = (lang: "fr" | "en") => {
        i18n.changeLanguage(lang);
    };


    return (
        <header className="navbar">
            <nav className="navbar-container">
                {/* Logo */}
                <a href="/" className="logo">
                    MV
                </a>
                {/* Links */}
                <ul className={`nav-links ${isOpen ? "active" : ""}`}>
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="navbar-actions">
                    {/* Language switch */}
                    <div className="language-switch">
                        <button
                            onClick={() => changeLanguage("fr")}
                            className={
                                i18n.language === "fr"
                                    ? "active-lang"
                                    : ""
                            }
                        >
                            FR
                        </button>
                        <button
                            onClick={() => changeLanguage("en")}
                            className={
                                i18n.language === "en"
                                    ? "active-lang"
                                    : ""
                            }
                        >
                            EN
                        </button>
                    </div>

                    {/* Theme */}
                    <button
                        className="theme-button"
                        onClick={toggleTheme}
                        aria-label="Changer le thème"
                    >
                        {darkMode
                            ? <Sun size={19} color="white" />
                            : <Moon size={19} />
                        }
                    </button>

                    {/* Mobile menu */}
                    <button
                        className="menu-button"
                        onClick={toggleMenu}
                        aria-expanded={isOpen}
                    >
                        {
                            isOpen
                                ? <X size={28} />
                                : <Menu size={28} />
                        }
                    </button>
                </div>
            </nav>
        </header>
    );
};


export default Navbar;