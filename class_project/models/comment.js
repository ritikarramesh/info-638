const db = require('../database')

exports.add = async (comment) => {
  return await db.getPool()
    .query(`INSERT INTO comments(comment, user_id, book_id, created_at)
            VALUES($1, $2, $3,CURRENT_TIMESTAMP) RETURNING *`,
      [comment.comment, comment.userId, comment.bookId]);
}

exports.update = async (comment) => {
  return await db.getPool()
    .query("update comments set comment = $1 where id = $2 RETURNING *",
      [comment.comment, comment.id]);
}

exports.upsert = (comment) => {
  if (comment.id) {
    exports.update(comment);
  } else {
    exports.add(comment);
  }
}

exports.get = async (id) => {
  const { rows } = await db.getPool().query("select * from comments where id = $1", [id]);
  return db.camelize(rows)[0];
}

exports.allForBook = async (book) => {
  const { rows } = await db.getPool().query(`
  select comments.*, users.email as user_email, users.id as user_id
  from comments
  left join users on users.id = comments.user_id
  where book_id = $1;
  `,[book.id]);
  return db.camelize(rows);
}
