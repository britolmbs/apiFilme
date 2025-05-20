const movieModel = requere('../models/movieModel');

exports.getMovies = async (req, res) => {
    const page = req.query.page || 1;
    try{
        const data = await movieModel.fetchMovies(page);
      return res.json(data);
    }catch(err) {
        return res.status(500).json({ erro: 'Erro ao buscar filmes.'});
    }
};

exports.getMovieDetails = async (req, res) => {
    try{
        const data = await movieModel.fetchMoviesDetails(req.params.id);
        return res.json(data);
    }catch (err) {
        return res.status(500).json({ error: 'Erro ao buscar detalhes do filme.'});
    }
};