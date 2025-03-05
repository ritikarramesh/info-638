const books = [ //i assigned authorId and genreId so that no data was duplicated
  {title: "Verity", publishingYear: 2022, authorIds: ["0"], genreId: [0]}, //for example: authorIds: ["0"] is index 0 in authors array (Colleen Hoover) and genreId [0] is index 0 in genres array (Psychological Thriller) (and so on for the rest) --
  {title: "The Fault in Our Stars", publishingYear: 2012, authorIds: ["1"], genreId: [1]}, 
  {title: "Twilight", publishingYear: 2005, authorIds: ["2"], genreId: [2]},
  {title: "Dune", publishingYear: 1965, authorIds: ["3"], genreId: [3]},
  {title: "Harry Potter and the Philosopher's Stone", publishingYear: 1997, authorIds: ["4"], genreId: [2]},
]

exports.all = books

exports.add = (book) => {
books.push(book);
}

exports.get = (idx) => {
return books[idx];
}

exports.upsert = (book) => {
if (book.authorIds && ! Array.isArray(book.authorIds)) {  //this converts single author ID to array
  book.authorIds = [book.authorIds];
}
if (book.genreId && ! Array.isArray(book.genreId)) {  //now same for genre - convert single author ID to array
  book.genreId = [book.genreId];
}

if (!book.authorIds) {  //this is an empty array if an author does not exist
  book.authorIds = [];
}
if (!book.genreId) {  //now same for genre - in case a genre does not exist
  book.genreId = [];
}
if (books.id) {  //update for if the book exists, otherwise add a new book
  exports.update(book);
} else {
  exports.add(book);
}
}

exports.update = (book) => {
books[book.id] = book;
}