const genres = [
  {type: "Psychological Thriller", description: "This book has a psychological element!"},
  {type: "Romance", description: "This book has romantic elements!"},
  {type: "Fantasy", description: "This book has magical or supernatural elements!"},
  {type: "Dystopian Fiction", description: "This book has a dystopian society!"},
]

exports.all = genres

exports.add = (genre) => {
genres.push(genre);
}

exports.get = (idx) => {
return genres[idx];
}

exports.upsert = (genre) => {
  if (genre.id) {
    exports.update(genre);
  } else {
    exports.add(genre);
  }
}

exports.update = (genre) => {
  genres[genre.id] = genre;
}
