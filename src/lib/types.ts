export type Question = {
    id: string;
    round: string;
    category: string;
    value: number;
    question: string;
    answer: string;
    seen:boolean
};

export type Jeopardy = {
    questions: Question[][];
    question_count: number;
};

export type FinalJeopardy = {
    question: Question;
};

export type GameState = {
    round: Jeopardy | null;
    currentState: "Start" | "Loading" | "Jeopardy" | "FinalJeopardy" | "GameOver"
    currentQuestion: Question | null;
    playerScore: number;
    answerFeedback: string;
    currentPlayerAnswer: string
    attemptedQuestion: boolean
};