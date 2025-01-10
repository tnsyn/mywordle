import { readFileSync } from "fs";
import path from "path";

export default async (req, context) => {
    const data = readFileSync(path.join(path.dirname(path.dirname(__dirname)), 'data/db.json'));
    const jsonData = JSON.parse(data);

    const randomNumber = Math.floor(Math.random() * (2314 - 1) + 1);
    const response = JSON.stringify(jsonData.solutions[randomNumber].word);

    return new Response(response, {
        status: 200, headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Origin': '*',
        }
    });
}