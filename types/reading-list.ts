import { Book } from "@/types/book";

export type ReadingList = {
    _id: string;
    _createdAt: string;
    _updatedAt: string;
    title: string; // Year
    books: Book[];
};
