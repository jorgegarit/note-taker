const router = require('express').Router();
const noteRoutes = require('./noteRoutes'); // since the lie in the same folder ./ works fine

router.use(noteRoutes);

module.exports = router;