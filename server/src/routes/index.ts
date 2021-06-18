import { Router } from "express";
import postRoute from './posts'
const router = Router();

router.use('/posts', postRoute);

export default router