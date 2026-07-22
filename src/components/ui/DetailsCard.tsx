import { useTranslation } from "react-i18next";
import type { Detail } from "@/data/educations";
import "./DetailsCard.css";

interface DetailCardProps {
    detail: Detail;
}

const DetailCard = ({ detail }: DetailCardProps) => {

    const { t } = useTranslation();

    return (
        <article className="detail-card">

            <div className="detail-card-header">

                <div>
                    <h4>{t(detail.titleKey)}</h4>

                    <span className="detail-company">
                        {detail.organization}
                    </span>
                </div>

                <div className="detail-dates">
                    {detail.startDate} — {detail.endDate}
                </div>

            </div>


            <p className="detail-location">
                📍 {detail.location}
            </p>


            {detail.descriptionKey && (
                <p className="detail-description">
                    {t(detail.descriptionKey)}
                </p>
            )}

        </article>
    );
};

export default DetailCard;