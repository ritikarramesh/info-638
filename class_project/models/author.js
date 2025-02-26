const authors = [
    {firstName: "James", lastName: "S. A. Corey"},
    {firstName: "Craig", lastName: "Alanson"},
    {firstName: "Cixin", lastName: "Liu"},
  ]

exports.all = authors

exports.add = (author) => {
  authors.push(author);
}