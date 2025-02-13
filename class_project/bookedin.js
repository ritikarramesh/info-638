const express = require("express");
const app = express();
const port = 3000;

const indexRouter = require('./routes/index');
const authorsRouter = require('./routes/authors');
const booksRouter = require('./routes/books');

var handlebars = require('express-handlebars').create();
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');


app.use('/', indexRouter);
app.use('/authors', authorsRouter);
app.use('/books', booksRouter);

app.use('/', function(req, res, next) {
  res.send("<h1>Hello BookedIn</h1>");
});

// custom 404 page
app.use((req, res) => {
    res.type('text/plain')
    res.status(404)
    res.send('<h1>404 - Not Found</h1>' )
  })

// custom 500 page
app.use((err, req, res, next) => {
    console.error(err.message)
    res.type('text/plain')
    res.status(500)
    res.send('500 - Server Error')
})

app.listen(port, () => console.log( //app.listen basically says keep the code running - we started a web server
    `Express started on http://localhost:${port}; ` +
    `press Ctrl-C to terminate.`))