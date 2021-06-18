import dotenv from 'dotenv'
import express, { Request, Response } from "express";
import next from 'next'
import routes from './routes'
dotenv.config({path: '../.env'})

const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev, dir: '../web' })
// console.log(__dirname)
const handleNext = nextApp.getRequestHandler()
const app = express();
const port = process.env.PORT || 5055;

app.use('/api',routes)
app.get('*', (req, res) => {
    return handleNext(req, res)
})
nextApp.prepare()


app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});