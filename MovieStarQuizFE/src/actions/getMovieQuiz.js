export default function getMovieQuiz(id) {

    return {
        type: 'GET_MOVIE_QUIZ',
        payload: id
    }
}
