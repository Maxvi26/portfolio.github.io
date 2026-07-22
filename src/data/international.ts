export interface Detail {
    id: number;
    titleKey: string;
    organization: string;
    location: string;
    startDate: string;
    endDate: string;
    descriptionKey?: string;
}

export const internationales: Detail[] = [
    {
        id: 1,
        titleKey: "about.internationaleinfo",
        organization: "Australia",
        location: "Melbourne, Australia",
        startDate: "07-2025",
        endDate: "07-2026",
    }
];