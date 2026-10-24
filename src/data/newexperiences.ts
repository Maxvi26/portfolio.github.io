export interface Detail {
    id: number;
    titleKey: string;
    organization: string;
    location: string;
    startDate: string;
    endDate: string;
    encours: number;
    descriptionKey?: string;
}

export const newexperiences: Detail[] = [
    {
        id: 1,
        titleKey: "about.newexperiences.alten.title",
        organization: "Alten Digital",
        location: "Marseille, France",
        startDate: "12-2026",
        endDate: "",
        encours: 1,
        descriptionKey: "about.newexperiences.alten.description",
    }
];