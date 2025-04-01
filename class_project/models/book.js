const books = [
  {title: "Verity", publishingYear: 2022, genreId: "0", authorIds: ["0","1"]},
  {title: "The Fault in Our Stars", publishingYear: 2012, genreId: "0", authorIds: ["0"]},
  {title: "Twilight", publishingYear: 2005, genreId: "0", authorIds: ["0"]},
  {title: "Dune", publishingYear: 1965, genreId: "0", authorIds: ["0"]},
  {title: "Harry Potter and the Philosopher's Stone", publishingYear: 1997, genreId: "0", authorIds: ["0"]},
];

exports.all = books

exports.get = (idx) => {
  return books[idx];
}

exports.add = (book) => {
  books.push(book);
}

exports.update = (book) => {
  books[book.id] = book;
}

exports.upsert = (book) => {
  if (book.authorIds && ! Array.isArray(book.authorIds)) {
    book.authorIds = [book.authorIds];
  }
  if (book.id) {
    exports.update(book);
  } else {
    exports.add(book);
  }
}








