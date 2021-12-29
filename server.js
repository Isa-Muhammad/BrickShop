const express = require("express");
const app = express();
const port = 8080;

//Serve static page
app.use(express.static("public"));

//Start app
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
