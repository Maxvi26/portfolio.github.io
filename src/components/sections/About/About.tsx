import { useTranslation } from "react-i18next";
import TerminalCard from "@/components/ui/TerminalCard";
import DetailsCard from "@/components/ui/DetailsCard";
import { internationales } from "@/data/international";
import { experiences } from "@/data/experiences";
import { educations } from "@/data/educations";

import "./About.css";

const About = () => {
    const { t } = useTranslation();

    return (
        <section className="about">
            <div className="about-container">

                <div className="about-content">
                    <h2>{t("about.title")}</h2>

                    <p>{t("about.description")}</p>
                    <TerminalCard
                        lines={[
                            {
                                command: t("about.internationale"),                            
                                result: (
                                    <>
                                        {internationales.map(international => (
                                            <DetailsCard
                                                key={international.id}
                                                detail={international}
                                            />
                                        ))}
                                    </>
                                )
                            },
                            {
                                command: "experience",
                                result: (
                                    <>
                                        {experiences.map(experience => (
                                            <DetailsCard
                                                key={experience.id}
                                                detail={experience}
                                            />
                                        ))}
                                    </>
                                )
                            },
                            {
                                command: "education",
                                result: (
                                    <>
                                        {educations.map(education => (
                                            <DetailsCard
                                                key={education.id}
                                                detail={education}
                                            />
                                        ))}
                                    </>
                                )
                            }
                        ]}
                    />
                </div>

            </div>
        </section>
    );
};

export default About;