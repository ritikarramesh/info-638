// const db = require('../database')

// exports.all = async () => {
//   const { rows } = await db.getPool().query("select * from authors order by id");
//   return db.camelize(rows);
//  }

const authors = [ //brought this back because it was causing errors, I dont think my db is connected, so for assignment purposes I brought it back.
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

exports.update = (author) => {
  authors[author.id] = author;
}

exports.upsert = (author) => {
  if (author.id) {
    exports.update(author);
  } else {
    exports.add(author);
  }
}
