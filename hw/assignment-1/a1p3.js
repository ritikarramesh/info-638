const books = [
    {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    yearPublished: 1925,
    genre: "Fiction"
    },

    {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    yearPublished: 1960,
    genre: "Fiction"
    },

    {
    title: "1984",
    author: "George Orwell",
    yearPublished: 1949,
    genre: "Dystopian Fiction"
    },

    {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    yearPublished: 1813,
    genre: "Classic Romance"
    },

    {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    yearPublished: 1951,
    genre: "Literary Fiction"
    },

    {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    yearPublished: 1954,
    genre: "Fantasy"
    },

    {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    yearPublished: 1997,
    genre: "Fantasy"
    },

    {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    yearPublished: 1979,
    genre: "Science Fiction Comedy"
    },

    {
    title: "Brave New World",
    author: "Aldous Huxley",
    yearPublished: 1932,
    genre: "Dystopian Fiction"
    }
];

function printBooksAfterYear(input){
    if (isNaN(input)) { //if the input is not a number, then it will print out "Please provide a valid year."
        console.log("Please provide a valid year.");
    } else { //otherwise, it will print out "Books published after 1990: (shows the books and the year published)"
        console.log('Books published after ' + input + ':')
        for(const book of books){ //the for loop will go through the array of book objects above and if there is a book with the year published (yearPublished), then it will go through the list over and over again and list it out.
            if (book.yearPublished > input){
                console.log(book.title + ' ' + book.yearPublished); // if there is a list of books with the year published after the input number, then it will print the title of the book with the published year.
            } 
    
            }
        }
    }
    
printBooksAfterYear(process.argv[2]);