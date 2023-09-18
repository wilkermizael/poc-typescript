import { Router } from "express";
import "express-async-errors";
import taskRouter from "./taskRouter";
import errorHandling from "@/middleware/errorHandling";

const router = Router()

router.use(taskRouter)
router.use(errorHandling)
export default router