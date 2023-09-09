import type { Question, Quiz } from "$lib/types"
import db from "./db"


export const getQuizCategories = async (args: Record<"limit", number>) => {
    const sql = `
        SELECT category FROM quizriot
        ORDER BY RANDOM()
        LIMIT :limit;
    `
    try {
        const result = await db.execute({sql, args})
        return result.rows
    } catch (e) {
        console.log(e)
    }
}

export const getQuizQuestions = async (limit: number) => {
    const sql = `
        SELECT
            id,
            category,
            value,
            question,
            answer
        FROM quizriot
        WHERE category = :category
        ORDER BY value
        LIMIT :limit;
    `

    const quiz: Quiz = {
        questions: [],
        question_count: 0
    }

    try {
        const categories = await getQuizCategories({"limit": 3})
        if (categories) {
            for (const catObj of categories) {
                const result = await db.execute({sql, args:{"category": catObj.category, limit}})
                const questionsSet = result.rows as unknown as Question[]
                questionsSet.map((question) => question["seen"] = false)
                quiz.questions.push(questionsSet)
                quiz.question_count += questionsSet.length
            }
        }
        return quiz
    } catch (e) {
        console.log(e)
    }
}