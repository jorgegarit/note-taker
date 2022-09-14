const router = require('express').Router();

// calling the json file where notes will be stored and note.js for functions
const { notes } = require('../../db/db.json');
const { createNotes } = require('../../lib/note');

// api routes
// router to get notes from note.json
router.get('/notes', (req, res) => {
    let savedNotes = notes;

    // adding saved notes to front end 
    res.json(savedNotes);
});

// delete section will go here

//  router to post new notes to front end and save notes
router.post('/notes', (req, res) => {
    // set id based on what the next index in the notesArray will be 
    req.body.id = notes.length.toString();
    const newNote = createNotes(req.body, notes);
    res.json(newNote);
});

module.exports = router;