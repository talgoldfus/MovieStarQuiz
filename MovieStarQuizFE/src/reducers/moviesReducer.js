const moviesReducer = function(state = { movieList: [] }, action) {

    switch (action.type) {
        case 'GET_MOVIES_FROM_API':
            let adaptedMovies = action.payload.map(movie => Object.assign({}, {
                id: movie.id,
                title: movie.original_title,
                poster_path: `https://image.tmdb.org/t/p/w342${movie.poster_path}`,
                release_date: new Date(movie.release_date)
            }))
            return {
                ...state,
                movieList: adaptedMovies
            };
        case 'GET_MOVIE_QUIZ':
            return {
                ...state,
                movieQuiz: state.movieList.find(movie => movie.id === action.payload)
              };
        default:
            return state;
    }
}



export default moviesReducer;
