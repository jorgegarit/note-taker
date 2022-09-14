const router = require('express').Router();
const notes = require('../../db/db.json');
const fs = require('fs');
const path = require('path');

const createNotes = require('../../lib/note');

// api routes
// router to get notes from note.json
router.get('/notes', (req, res) => {
    res.json(notes);
});

//  router to post new notes to front end and save notes
router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString()
    const newNote = createNotes(req.body, notes)
    res.json(newNote);
});

module.exports = router;