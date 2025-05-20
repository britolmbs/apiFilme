const express = require('express');
const router = express.Router();
const movieController = require('../controllers/MovieController');

router.get('/movies', movieController.getMovies);
router.get('/movies/:id', movieController.getMoviesDetails);

module.exports = router;