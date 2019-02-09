const express = require("express");
const app = express();
const https = require('https');


const hostname = "192.168.1.2";
// const port = 3000;

// const server = https.createServer(app).listen();
app.get("/", (req, res) => {
   res.send("Привеееееет!");
});

app.listen(3000, hostname, () => {
    console.log("Home media server listen on port 3000!");
});
