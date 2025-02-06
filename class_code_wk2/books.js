const books = [
    ['The Iliad', 'Homer', 'Greek'],
    ['The Odyssey', 'Homer', 'Greek'],
    ['Metamorphoses', 'Ovid', 'Latin'],
    ['The Aeneid', 'Virgil', 'Latin'],

]
const languageName = process.argv[2];

if(!languageName) {
    console.log("please type a language.");
} else {
    const filteredBooks = books.filter(book => book[1] === authorName);
    if (filteredBooks.length === 0) {
        console.log(`No books found in the language: ${languageName}.`);
    } else {
        console.log(`Books in the langauge: ${languageName}:`);
        filteredBooks.forEach(book => console.log(book[0], "by", book[1]));
    }
}
