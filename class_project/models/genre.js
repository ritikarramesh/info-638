const genres = [
  {genre: "Psychological Thriller"}, 
  {genre: "Romance"},
  {genre: "Fantasy"},
  {genre: "Dystopian Fiction"}
];

exports.add = (genre) => {
  genres.push(genre);
}

exports.get = (idx) => {
  return genres[idx];
}

exports.update = (genre) => {
  genres[genre.id] = genre;
}

exports.upsert = (genre) => {
  if (genre.id) {
    exports.update(genre);
  } else {
    exports.add(genre);
  }
}

exports.all = genres
