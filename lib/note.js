const { Certificate } = require('crypto');
const fs = require('fs');
const path = require('path');

// function to create a new note
function createNotes(body, notesArray) {
    const note = body;
    notesArray.push(note);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );

    return note;
}

// function to delete a created note
// will add this later


// Export for createNotes
module.exports = createNotes;