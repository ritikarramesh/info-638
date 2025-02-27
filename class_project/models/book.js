const books = [
    {title: "Leviathan Wakes", publishingYear: 2011, authorIds: ["0","1"]},
    {title: "Columbus Day", publishingYear: 2012},
    
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
  if (book.id) {
    exports.update(book);
  } else {
    exports.add(book);
  }
}

exports.update = (book) => {
  books[book.id] = book;
}