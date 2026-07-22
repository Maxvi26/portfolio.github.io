export interface Detail {
    id: number;
    titleKey: string;
    organization: string;
    location: string;
    startDate: string;
    endDate: string;
    descriptionKey?: string;
}

export const educations: Detail[] = [
    {
        id: 1,
        titleKey: "about.educations.epitech.title",
        organization: "Epitech",
        location: "Lyon, France",
        startDate: "09-2022",
        endDate: "07-2025",
    },
    {
        id: 2,
        titleKey: "about.educations.iut.title",
        organization: "IUT Université Claude Bernard Lyon 1",
        location: "Lyon, France",
        startDate: "09-2020",
        endDate: "07-2022",
    },
];