const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => console.log( //app.listen basically says keep the code running - we started a web server
    `Express started on http://localhost:${port}; ` +
    `press Ctrl-C to terminate.`))