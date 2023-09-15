
import infoTask from "../controllers/taskController";
import { Router } from "express";

const taskRouter = Router()

taskRouter.post('/infotask', infoTask)

export default taskRouter