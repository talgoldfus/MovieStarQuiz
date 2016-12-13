export default function submittedAnswer(submitted, userIsCorrect) {

    return {
        type: 'SUBMITTED_ANSWER',
        payload: {submitted,userIsCorrect}
    }
}
