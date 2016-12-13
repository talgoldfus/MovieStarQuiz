const gameReducer = function(state = {answered: false }, action) {

    switch (action.type) {
        case 'SUBMITTED_ANSWER':
                return {
                    ...state,
                    answered: action.payload.submitted,
                    userAnsweredCorrect: action.payload.userIsCorrect
                }
        default:
            return state;
    }
}

export default gameReducer;
