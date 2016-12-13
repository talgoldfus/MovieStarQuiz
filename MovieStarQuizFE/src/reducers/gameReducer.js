const gameReducer = function(state = {answered: false }, action) {

    switch (action.type) {
        case 'SUBMITTED_ANSWER':
                return {
                    ...state,
                    answered: action.payload.submitted,
                    userAnsweredCorrect: action.payload.userIsCorrect
                }
        case 'SUBMITTED_SEARCH':
                return {
                    ...state,
                    submittedSearch: action.payload
                }
        default:
            return state;
    }
}

export default gameReducer;
