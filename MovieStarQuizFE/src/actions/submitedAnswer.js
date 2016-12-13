export default function submitedAnswer(submitted, userIsCorrect) {

    return {
        type: 'SUBMITTED_ANSWER',
        payload: {submitted,userIsCorrect}
    }
}
