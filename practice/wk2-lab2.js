const books = [
    ['The Iliad', 'Homer', 'Greek'],
    ['The Odyssey', 'Homer', 'Greek'],
    ['Metamorphoses', 'Ovid', 'Latin'],
    ['The Aeneid', 'Virgil', 'Latin'] ];

//Get the author name form the comman line argument
const language = process.argv[2];

//Check if authorName is provided
if (!language) {
    console.log("give me a language:")
} else {
    // filter the books by the provided author and print the titles
    const filteredBooks = books.filter(book => book[2] === language);
    if (filteredBooks.length === 0) {
        console.log (`No books found in ${language}.`);
    } else {
        console.log(`books in ${language}:`);
        filteredBooks.forEach(book => console.log(book[0], "by", book[1]));
    }
}