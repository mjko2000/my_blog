import dotenv from 'dotenv'
import express, { Request, Response } from "express";
import LRUCache from 'lru-cache'
import compression from 'compression'
import next from 'next'
import routes from './routes'
import { NextServer } from 'next/dist/server/next';
dotenv.config({ path: '../.env' })

const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev, dir: '../web' })
// console.log(__dirname)
const handleNext = nextApp.getRequestHandler()
const port = process.env.PORT || 5055;

const ssrCache = new LRUCache({
    max: 20,
    maxAge: 1000 * 60 * 60, // 1hour
});

nextApp.prepare().then(() => {
    const server = express()
    server.use('/api', routes)
    server.get('/_next/*', (req, res) => {
        /* serving _next static content using next.js handler */
        handleNext(req, res);
    });
    server.get('*', (req, res) => {
      // since we don't use next's requestHandler, we lose compression, so we manually add it
    //   renderAndCache(nextApp)(req, res, req.path,req.query);
        handleNext(req, res)
    });
    
    // server.get('*', (req, res) => handleNext(req, res))
  
    server.listen(port, () => {
        console.log(`server started at http://localhost:${port}`);
    });
  })