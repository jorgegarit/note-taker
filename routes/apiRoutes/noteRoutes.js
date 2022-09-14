const router = require('express').Router();

// calling the json file where notes will be stored and note.js for functions
const { notes } = require('../../db/db');
const { createNotes } = require('../../lib/note');

// router to get notes from note.json
router.get('/notes', (req, res) => {
    let savedNotes = notes;

    // addind saved notes to front end 
    res.json(savedNotes);
});

//  router to post new notes to front end 
router.post('/notes', (req, res) => {
    // set id based on what the next index in the notesArray will be 
    req.body.id = notes.length.toString();
})