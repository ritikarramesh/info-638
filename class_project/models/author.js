const authors = [
    {firstName: "James", lastName: "S. A. Corey"},
    {firstName: "Craig", lastName: "Alanson"},
    {firstName: "Cixin", lastName: "Liu"},
  ]

exports.all = authors

exports.add = (author) => {
  authors.push(author);
}

exports.get = (idx) => {
  return authors[idx];
}

exports.upsert = (author) => {
  if (author.id) {
    exports.update(author);
  } else {
    exports.add(author);
  }
}

exports.update = (author) => {
  authors[author.id] = author;
}