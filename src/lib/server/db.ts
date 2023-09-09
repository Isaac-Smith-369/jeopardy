import { createClient } from "@libsql/client/web";
import { DB_URL, DB_TOKEN } from "$env/static/private";


const config = {
    url: DB_URL,
    authToken: DB_TOKEN
}

const db = createClient(config);


export default db