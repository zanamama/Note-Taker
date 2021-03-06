const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path");
const { init, addNewNote, fetchNotes, removeNote } = require("./logic.js");

app.use(express.static(__dirname + "/public/"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.get("notes", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/notes.html"));
});

app.post("/api/notes", (req, res) => {
  const newNote = {
    id: Date.now(),
    title: req.body.title,
    text: req.body.text,
  };
  addNewNote(newNote);
  res.send(newNote);
});

app.delete("/api/notes/:id", (req, res) => {
  const noteId = req.params.id;
  removeNote(nodeId);
  res.send(`deleting ${noteId}`);
});

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Listening on PORT ${PORT}`);
});

init();
