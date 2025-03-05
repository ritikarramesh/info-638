const books = [
  {title: "Verity", publishingYear: 2022, authorIds: ["0"], genreId: [0]},
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
if (book.authorIds && ! Array.isArray(book.authorIds)) {
  book.authorIds = [book.authorIds];
}
if (book.genreId && ! Array.isArray(book.genreId)) {
  book.genreId = [book.genreId];
}

if (!book.authorIds) {
  book.authorIds = [];
}
if (!book.genreId) {
  book.genreId = [];
}
if (books.id) {
  exports.update(book);
} else {
  exports.add(book);
}
}

exports.update = (book) => {
books[book.id] = book;
}