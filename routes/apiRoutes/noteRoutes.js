const router = require('express').Router();

// calling the json file where notes will be stored and note.js for functions
const { notes } = require('../../db/db');
const { createNotes } = require('../../lib/note');

