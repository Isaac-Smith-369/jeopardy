import { writable } from "svelte/store"
import type { GameState, Question } from "./types"
import { jaccardSimilarity, tokenize } from "./utils"


const _gameState = () => {
    // Initialize game state
    const {set, update, subscribe} = writable<GameState>({
        round: null,
        currentState: "Start",
        currentQuestion: null,
        playerScore: 0,
        answerFeedback: '',
        currentPlayerAnswer: '',
        attemptedQuestion: false
    })

    return {
        subscribe,
        set: set,
        update: update,
        checkAnswer: () => update((state) => {
            if (state.currentQuestion && state.currentPlayerAnswer) {
                const correctTokens = new Set(tokenize(state.currentQuestion.answer));
                const playerTokens = new Set(tokenize(state.currentPlayerAnswer));
                const similarity = jaccardSimilarity(correctTokens, playerTokens);

                if (similarity >= 0.5) {
                    state.playerScore += state.currentQuestion.value
                    state.answerFeedback = "Correct!"
                } else {
                    state.playerScore -= state.currentQuestion.value
                    state.answerFeedback = `Wrong. The answer is ${state.currentQuestion.answer}`
                }

                state.attemptedQuestion = true

            }

            return state
        }),
        revealQuestion: (question: Question) => update((state) => {
            state.currentQuestion = question
            state.attemptedQuestion = false;
            return state
        }),
        markQuestionAsSeen: () => update((state) => {
            // Mark current question as seen
            state.round?.questions.flat().forEach((q) => {
                if (q.id == state.currentQuestion?.id) {q.seen = true}
            })

            // Decrement Question Count
            if (state.round?.question_count) {
                state.round.question_count -= 1;
            }

            // Game over if no more questions
            if (state.round?.question_count === 0) {
                // state.playerScore = 0;
                state.currentState = "GameOver";
            }

            // Reset
            state.currentQuestion = null;
            state.currentPlayerAnswer = ''
            state.answerFeedback = ''
            return state
        })
    }
}


export const gameState = _gameState()