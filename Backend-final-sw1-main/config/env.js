import {DB_USER, DB_PASSWORD, DB_HOST} from "./config.js";

const PORT = 3100;
const DB_URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}?retryWrites=true&w=majority`;

export {
    PORT,
    DB_URI
}