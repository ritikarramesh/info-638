const genres = [ //assignment 2 addition: implement a genres model
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
  if (genre.id) {  //update if the genre exists
    exports.update(genre);
  } else {  //if it doesn't exist, add a new genre
    exports.add(genre);
  }
}

exports.update = (genre) => {
  genres[genre.id] = genre;
}
