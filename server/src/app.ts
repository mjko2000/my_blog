import dotenv from 'dotenv'
import express, { Request, Response } from "express";
import next from 'next'
dotenv.config({path: '../.env'})

const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev, dir: '../web' })
// console.log(__dirname)
const handleNext = nextApp.getRequestHandler()
const app = express();
const port = process.env.PORT || 5055;

app.get('*', (req, res) => {
    return handleNext(req, res)
})
nextApp.prepare()

app.get("/", (req: Request, res: Response) => {
    res.send("Hello world!");
});


app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});