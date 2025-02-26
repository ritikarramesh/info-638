const books = [
    {title: "Leviathan Wakes", publishingYear: 2011},
    {title: "Columbus Day", publishingYear: 2012},
  ]

exports.all = books

exports.add = (book) => {
  books.push(book);
}

