var express = require('express');
var router = express.Router();
module.exports = router;

const TMDB_API_KEY = process.env.TMDB_API_KEY;

router.get('/movies', (req, res) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
      .then(response => response.json())
      .then(data => {
        res.json({ movies: data.results });
      });
   });