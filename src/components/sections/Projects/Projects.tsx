import { projects } from "@/data/projects";
import "./Projects.css";
import { ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";

const Projects = () => {
    const featuredProjects = projects.filter(
        (project) => project.featured
    );
    const { t } = useTranslation();
    return (
        <section className="projects" id="projects">
            <div className="projects-header">
                <p className="section-tag">Portfolio</p>
                <h2>
                    {t("projects.my")} <span>{t("projects.projects")}</span>
                </h2>
                <p className="section-description">
                    {t("projects.description")}
                </p>
            </div>
            <div className="projects-grid">
                {featuredProjects.map((project) => (
                    <article
                        className="project-card"
                        key={project.title}
                    >
                        <div className="project-image">
                            <img
                                src={project.image}
                                alt={project.title}
                            />
                        </div>
                        <div className="project-content">
                            <h3>
                                {project.title}
                            </h3>
                            <p>
                            {t(project.description)}
                            </p>
                            <div className="technologies">
                                {project.technologies.map((tech) => (
                                    <span key={tech}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="project-links">
                                {project.demo && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <ExternalLink size={18} />
                                        Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Projects;