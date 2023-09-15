import { Request, Response } from "express";
import { InfoTask } from "../protocols/infoProtocols";
import { inforTaskService } from "../services/taskService";

export default async function infoTask(req: Request,res: Response){
  const info = req.body as InfoTask
  await inforTaskService.createTask(info)
  res.sendStatus(200)
}