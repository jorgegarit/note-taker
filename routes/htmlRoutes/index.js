const path = require('path');
const router = require('express').Router();

// router.get calls for html path taken will just need 2 one for the notes page and the other for home

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

// this will send user back to load screen if they go on a random path (example /notetaker)
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;