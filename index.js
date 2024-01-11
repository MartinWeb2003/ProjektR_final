import express from "express";
import bodyParser from "body-parser";
import { render } from "ejs";

const app = express();
const port = 3000;

app.use(express.static("public"));


app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});


app.get("/todos", (req, res) => {
  res.render("todos.ejs");
});

app.get("/tictactoe", (req, res) => {
  res.render("games/tictactoe.ejs");
});

app.get("/rps", (req, res) => {
  res.render("games/rps.ejs");
});

app.get("/games", (req, res) => {
  res.render("games.ejs");
});

app.get("/typingspeed", (req, res) => {
  res.render("games/typingspeed.ejs");
});

app.get("/error", (req, res) => {
  res.render("error.ejs");
});


app.get("/notes", (req, res) => {
  res.render("notes.ejs");
});

app.post("/addTask",(req,res) =>{
  
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
