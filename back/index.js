const express = require("express");
const app = express();

app.get("/", (req, res) => {
   res.send("Привеееееет!");
});

app.listen(3000, () => {
    console.log("Home media server listen on port 3000!");
});
