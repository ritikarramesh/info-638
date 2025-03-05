const authors = [
  {firstName: "Colleen", lastName: "Hoover"},
  {firstName: "John", lastName: "Green"},
  {firstName: "Stephenie", lastName: "Meyer"},
  {firstName: "Frank", lastName: "Herbert"},
  {firstName: "J.K.", lastName: "Rowling"},
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