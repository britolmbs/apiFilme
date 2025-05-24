const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

router.get('/movies', movieController.getMovies);
router.get('/movies/:id', movieController.getMovieDetails);

module.exports = router;