import dotenv from 'dotenv'
import express, { Request, Response } from "express";
import next from 'next'
import cacheableResponse from 'cacheable-response';
import routes from './routes'
import { NextServer } from 'next/dist/server/next';
dotenv.config({ path: '../.env' })

const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev, dir: '../web' })
// console.log(__dirname)
const handleNext = nextApp.getRequestHandler()
const port = process.env.PORT || 5055;

nextApp.prepare().then(() => {
    const server = express()
    server.use('/api', routes)

    server.get('/home', (req, res) => ssrCache({ req, res, path: req.path, query: req.query, }))
    server.get('/topic/:topic', (req, res) => ssrCache({ req, res, path: req.path, query: req.query, }))
    server.get('/post/:id', (req, res) => ssrCache({ req, res, path: req.path, query: req.query, }))
    server.get('*', (req, res) => {
        handleNext(req, res)
    });

    // server.get('*', (req, res) => handleNext(req, res))

    server.listen(port, () => {
        console.log(`server started at http://localhost:${port}`);
    });

    const ssrCache = cacheableResponse({
        ttl: 1000 * 60, // 1 minute
        getKey: ({ req }) => `${req.url}`,
        get: async ({ req, res, path, query }) => {
            const data = await nextApp.renderToHTML(req, res, path, query)

            // Add here custom logic for when you do not want to cache the page, for
            // example when the page returns a 404 status code:
            if (res.statusCode === 404) {
                res.end(data)
                return
            }

            return { data }
        },
        send: ({ data, res }: any) => res.send(data)
    })
})