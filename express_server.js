const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");

app.use(express.static(__dirname + '/public'));

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", (req, res) => {
  let templateVars = {
    
  };
  res.render("main_gamepage", templateVars);
});

// app.get("/urls.json", (req, res) => {
//   res.json(urlDatabase);
// });

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});