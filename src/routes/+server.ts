import type { RequestHandler } from "./$types";


export const GET: RequestHandler = async () => {
    const res = await fetch("http://0.0.0.0:8000/game")

    if (!res.ok) {
        throw new Error(`A network error occured. Code::${res.status}`)
    }

    return res
}