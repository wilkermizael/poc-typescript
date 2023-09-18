
import { Request, Response } from "express";
import { InfoTask } from "../protocols/infoProtocols";
import { infoTaskService } from "../services/taskService";
import httpStatus from "http-status";

export async function createTask(req: Request,res: Response){
  const info = req.body as InfoTask
  await infoTaskService.createTask(info)
  res.sendStatus(200)
}
async function getTask(req: Request, res: Response){
  const result = await infoTaskService.getTask()
  res.status(httpStatus.OK).send(result)
};

async function deleteTask(req: Request, res: Response){
  const {id} =req.params
  const result = await infoTaskService.deleteTask(id)
  return res.status(httpStatus.OK).send(result)
};

async function statusTask(req: Request, res: Response){
  const { id } = req.params;
  const result = await infoTaskService.statusTask(id);
  return res.status(httpStatus.ACCEPTED).send(result);
};
export const infoTask = {createTask, getTask, deleteTask,statusTask}