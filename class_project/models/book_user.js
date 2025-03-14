const books_users = [
    {bookId: "0", userEmail: "rvanmech@pratt.edu", status: "finished"},
    {bookId: "1", userEmail: "rvanmech@pratt.edu", status: "reading"},
    {bookId: "2", userEmail: "rvanmech@pratt.edu", status: "todo"},
    {bookId: "3", userEmail: "rvanmech@pratt.edu", status: "todo"}
  ];
  
  exports.statuses = [
    "todo","reading","finished"
  ]
  
  exports.add = (book_user) => {
    books_users.push(book_user);
  }
  
  exports.get = (bookId, userEmail) => {
    return books_users.find((book_user) => {
      return book_user.bookId == bookId && book_user.userEmail == userEmail;
    });
  }
  
  exports.AllForUser = (userEmail) => {
    return books_users.filter((book_user) => {
      return book_user.userEmail == userEmail;
    });
  }

  exports.update = (idx, book_user) => {
    books_users[idx] = book_user;   //The find method will do exactly what we need
  }
  
  exports.upsert = (book_user) => { //we should not rely on the index, but rather on the 
    let idx = books_users.findIndex((bu) => {  //bookId and userId. To do so we should find the book
      return bu.bookId == book_user.bookId &&  //based on this info with findIndex. This works just
             bu.userEmail == book_user.userEmail; //like find but returns the index of the matching element.
             
    });
    if (idx == -1) {  //if no match is found, it returns -1
      exports.add(book_user);  //that means we are adding a new book
    } else {
      exports.update(idx,book_user); //we can call update, but have to provide the index as well
    }
  }
  
  
  
  