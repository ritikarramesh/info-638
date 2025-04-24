const db = require('../database')

exports.all = async () => {
  const { rows } = await db.getPool().query("select * from books order by id");
  return db.camelize(rows);
}

exports.get = async (id) => {
  const { rows } = await db.getPool().query("select * from books where id = $1", [id])
  return db.camelize(rows)[0]
}

exports.add = async (book) => {
  const { rows } = await db.getPool()
    .query("INSERT INTO books(title, publishing_year, genre_id) VALUES($1, $2, $3) RETURNING *",
      [book.title, book.publishingYear, book.genreId]);
  let newBook = db.camelize(rows)[0]
  await addAuthorsToBook(newBook, book.authorIds)
  return newBook
}


exports.update = async (book) => {
  const { rows } = await db.getPool()
    .query("UPDATE books SET title = $1, publishing_year = $2, genre_id = $3 where id = $4 RETURNING *",
      [book.title, book.publishingYear, book.genreId, book.id]);
  let newBook = db.camelize(rows)[0]
  await DeleteAuthorsForBook(newBook) // By first deleting the relevant authors_books records, we prevent accidental duplicates
  await addAuthorsToBook(newBook, book.authorIds)
  return newBook
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

const addAuthorsToBook = async (book, authorIds) => {
  authorIds.forEach(async (authorId) => {
    await db.getPool().query(`
      INSERT INTO authors_books(author_id, book_id) values($1,$2)
      `,[authorId,book.id])
  })
}

const DeleteAuthorsForBook = async (book) => {
  db.getPool().query(`DELETE from authors_books where book_id = $1`, [book.id]);
}
