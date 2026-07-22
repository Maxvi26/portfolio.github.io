export interface Detail {
    id: number;
    titleKey: string;
    organization: string;
    location: string;
    startDate: string;
    endDate: string;
    descriptionKey?: string;
}

export const experiences: Detail[] = [
    {
        id: 1,
        titleKey: "about.experiences.equans.title",
        organization: "Equans Digital",
        location: "Lyon, France",
        startDate: "12-2022",
        endDate: "07-2025",
        descriptionKey: "about.experiences.equans.description",
    },
    {
        id: 2,
        titleKey: "about.experiences.stage.title",
        organization: "Equans Digital",
        location: "Lyon, France",
        startDate: "04-2022",
        endDate: "06-2022",
        descriptionKey: "about.experiences.stage.description",
    },
];