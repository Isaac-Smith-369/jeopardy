import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { getQuizQuestions } from "$lib/server/quiz";


export const GET: RequestHandler = async () => {
    const quiz = await getQuizQuestions(5)

    if (!quiz) {
        throw new Error(`An error occured.`)
    }

    return json(quiz)
}