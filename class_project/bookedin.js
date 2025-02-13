const express = require("express");
const app = express();
const port = 3000;

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