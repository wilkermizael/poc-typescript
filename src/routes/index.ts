import { Router } from "express";
import taskRouter from "./taskRouter";

const router = Router()

router.use(taskRouter)

export default router