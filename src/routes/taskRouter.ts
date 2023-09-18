
import { validateSchema } from "../middleware/validateSchema";
import { Router } from "express";
import infoTaskSchema from "@/schemas/infoSchema";
import { infoTask } from "@/controllers/taskController";



const taskRouter = Router()

taskRouter.post('/infotask',validateSchema(infoTaskSchema), infoTask.createTask)
taskRouter.get("/infotask", infoTask.getTask);
taskRouter.delete("/infotask/:id", infoTask.deleteTask);
taskRouter.put("/infotask/:id", infoTask.statusTask);

export default taskRouter