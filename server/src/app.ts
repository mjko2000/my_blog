import dotenv from 'dotenv'
import express, { Request, Response } from "express";
import LRUCache from 'lru-cache'
import next from 'next'
import routes from './routes'
dotenv.config({path: '../.env'})

const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev, dir: '../web' })
// console.log(__dirname)
const handleNext = nextApp.getRequestHandler()
const app = express();
const port = process.env.PORT || 5055;

const ssrCache = new LRUCache({
    max: 100 * 1024 * 1024, /* cache size will be 100 MB using `return n.length` as length() function */
    length: function (n:any, key:any) {
        return n * 2 + key.length
    },
    maxAge: 1000 * 60 * 60 * 24 * 30
});

app.use('/api',routes)
app.get('/_next/*', (req, res) => {
    /* serving _next static content using next.js handler */
    handleNext(req, res);
});
app.get('*', (req, res) => {
    // return handleNext(req, res)
    return renderAndCache(req, res)
})
function getCacheKey(req: Request) {
    return `${req.path}`
}

async function renderAndCache(req: any, res: Response) {
    const key = getCacheKey(req);

    // If we have a page in the cache, let's serve it
    if (ssrCache.has(key)) {
        console.log(`serving from cache ${key}`);
        res.setHeader('x-cache', 'HIT');
        console.log(ssrCache.get(key))
        res.send(ssrCache.get(key));
        return
    }

    try {
        console.log(`key ${key} not found, rendering`);
        res.setHeader('x-cache', 'MISS');
        const html = await nextApp.renderToHTML(req, res, req.path, req.query);
        console.log(html)
        // // Something is wrong with the request, let's skip the cache
        if (res.statusCode !== 200) {
            res.send(html);
            return
        }

        // Let's cache this page
        ssrCache.set(key, html);

        // res.send(html)
    } catch (err) {
        console.log(err)
        nextApp.renderError(err, req, res, req.path, req.query)
    }
}
nextApp.prepare()


app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});