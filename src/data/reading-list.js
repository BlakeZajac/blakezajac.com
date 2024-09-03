/**
 * @typedef     {Object} Year
 * @property    {number} year   The year of the reading list.
 * @property    {Book[]} books  The array of books for that year.
 */

/**
 * @typedef     {Object}        Book
 * @property    {string}        title           The title of the book.
 * @property    {string}        author          The author of the book.
 * @property    {status}        status          The status of the book..
 */

/**
 * @type {Year[]}
 * @description An array of reading lists organised by year.
 */

const readingListData = [
    {
        year: 2024,
        books: [
            {
                title: "Meditations",
                author: "Marcus Aurelius",
            },
            {
                title: "The Obstacle Is The Way",
                author: "Ryan Holiday",
            },
            {
                title: "Deep Work",
                author: "Cal Newport",
            },
            {
                title: "No Death, No Fear",
                author: "Thich Nhat Hanh",
                status: "Complete",
            },
            {
                title: "The Mamba Mentality",
                author: "Kobe Bryant",
                status: "Complete",
            },
            {
                title: "Atomic Habits",
                author: "James Clear",
                status: "Complete",
            },
        ],
    },
];

export default readingListData;
