const db = require('../database')

exports.all = async () => {
 const { rows } = await db.getPool().query("select * from authors order by id");
 return db.camelize(rows);
}


const authors = [
  {firstName: "Colleen", lastName: "Hoover"},
    {firstName: "John", lastName: "Green"},
    {firstName: "Stephenie", lastName: "Meyer"},
    {firstName: "Frank", lastName: "Herbert"},
    {firstName: "J.K.", lastName: "Rowling"},
]

// exports.all = authors

exports.add = async (author) => {
  return db.getPool().query(
    "INSERT INTO authors(first_name, last_name) VALUES($1, $2) RETURNING *",
    [author.firstName, author.lastName]
  );
}

exports.get = async (id) => {
  const { rows } = await db.getPool().query("select * from authors where id = $1", [id])
  return db.camelize(rows)[0]
}

exports.update = async (author) => {
  return await db.getPool().query(
    "UPDATE authors SET first_name = $1, last_name = $2 where id = $3 RETURNING *",
    [author.firstName, author.lastName, author.id]
  );
}

exports.upsert = async (author) => {
  if (author.id) {
    exports.update(author);
  } else {
    exports.add(author);
  }
}

exports.allForBook = async (book) => {
  const { rows } = await db.getPool().query(`
    select authors.* from authors
    JOIN authors_books on authors_books.author_id = authors.id
    where authors_books.book_id = $1;`, [book.id]);
  return db.camelize(rows);
}

