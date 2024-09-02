export type Book = {
    _key: string;
    title: string;
    author: string;
    status: "Complete" | "In Progress" | "Incomplete" | "";
    image?: {
        asset: {
            url: string;
            metadata: any;
        };
    };
    link?: string;
};
