const db = require('../database')

exports.all = async () => {
 const { rows } = await db.getPool().query("select * from genres order by id");
 return db.camelize(rows);
}

exports.add = async (genre) => {
  return await db.getPool().query(
      "INSERT INTO genres(name) VALUES($1) RETURNING *",
      [genre.name]
    );
}

exports.get = async (id) => {
  const { rows } = await db.getPool().query("select * from genres where id = $1", [id])
    return db.camelize(rows)[0]
}

exports.update = async (genre) => {
  return await db.getPool().query(
      "UPDATE genres SET name = $1 where id = $2 RETURNING *",
      [genre.name, genre.id]
    );
}

exports.upsert = async (genre) => {
  if (genre.id) {
    exports.update(genre);
  } else {
    exports.add(genre);
  }
}

// exports.all = genres







// -------------------------------------------


// const genres = [
//   {genre: "Psychological Thriller"}, 
//   {genre: "Romance"},
//   {genre: "Fantasy"},
//   {genre: "Dystopian Fiction"}
// ];

// exports.add = (genre) => {
//   genres.push(genre);
// }

// exports.get = (idx) => {
//   return genres[idx];
// }

// exports.update = (genre) => {
//   genres[genre.id] = genre;
// }

// exports.upsert = (genre) => {
//   if (genre.id) {
//     exports.update(genre);
//   } else {
//     exports.add(genre);
//   }
// }

// exports.all = genres
