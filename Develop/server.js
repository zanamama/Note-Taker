//DEPENDENCIES
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path");
const { init, addNewNote, fetchNotes, removeNote } = require("./logic.js");

app.use(express.static(__dirname + "/public/"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//ROUTES
// homepage route:
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.get("notes", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/notes.html"));
});

//PUSH Changes to github after creating code. Because my heroku is connected to my github, I can click on deploy and it'll deploy to heroku
