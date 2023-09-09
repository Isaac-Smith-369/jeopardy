export type Question = {
    id: number,
    category: string,
    value: number,
    question: string,
    answer: string,
    seen: boolean
}
export type Quiz = {
    questions: Question[][],
    question_count: number
}

export type GameState = {
    quiz: Quiz | null;
    currentState: "Start" | "Loading" | "Quiz" | "GameOver"
    currentQuestion: Question | null;
    playerScore: number;
    answerFeedback: string;
    currentPlayerAnswer: string
    attemptedQuestion: boolean
};