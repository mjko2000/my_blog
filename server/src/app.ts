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
    server.use(compression());
    server.get('/_next/*', (req, res) => {
        /* serving _next static content using next.js handler */
        handleNext(req, res);
    });
    server.get('/home', (req, res) => renderAndCache(nextApp)(req, res, req.path,req.params))
    server.get('/post/:id', (req, res) => renderAndCache(nextApp)(req, res, req.path,req.params))
    server.get('/topic/:topic', (req, res) => renderAndCache(nextApp)(req, res, req.path,req.params))
    server.get('*', (req, res) => {
      // since we don't use next's requestHandler, we lose compression, so we manually add it
    //   renderAndCache(nextApp)(req, res, req.path,req.query);
        server.get('*', (req, res) => handleNext(req, res))
    });
    
    // server.get('*', (req, res) => handleNext(req, res))
  
    server.listen(port, () => {
        console.log(`server started at http://localhost:${port}`);
    });
  })



const renderAndCache = (app: NextServer) => async function (req: any, res: any, pagePath: any, queryParams: any) {
    const { host } = req.headers;
    // Define the cache key as you wish here:
    const key = host + req.url;

    // if page is in cache, server from cache
    if (ssrCache.has(key)) {
        console.log('SSR Response from cache for ', key);
        res.setHeader('x-cache', 'HIT');
        res.end(ssrCache.get(key));
        return;
    }

    try {
        /**
         * Override res.end method before sending it to app.renderToHTML
         * to be able to get the payload (renderedHTML) and save it to cache.
         */
        const _resEnd = res.end.bind(res);
        res.end = function (payload: any) {
            // Add here custom logic for when you do not want to cache the page, for example when
            // the status is not 200
            if (res.statusCode !== 200) {
                console.log('Oops, something is wrong, will skip the cache');
            } else {
                ssrCache.set(key, payload);
            }
            return _resEnd(payload);
        };
        // if not in cache, render the page into HTML
        res.setHeader('x-cache', 'MISS');
        console.log('SSR rendering without cache and try caching for ', key, pagePath, queryParams);
        await app.renderToHTML(req, res, pagePath, queryParams);
    } catch (err) {
        console.log(err)
        app.renderError(err, req, res, pagePath, queryParams);
    }
};