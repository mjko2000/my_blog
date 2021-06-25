import dotenv from 'dotenv'
import express, { Request, Response } from "express";
import next from 'next'
import routes from './routes'
dotenv.config({ path: '../.env' })

const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev, dir: '../web' })
const handleNext = nextApp.getRequestHandler()
const port = process.env.PORT || 5055;

nextApp.prepare().then(() => {
    const server = express()
    server.use('/api', routes)

    server.get('*', (req, res) => {
        handleNext(req, res)
    });

    server.listen(port, () => {
        console.log(`server started at http://localhost:${port}`);
    });
})