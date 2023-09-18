import { infoTaskRepository } from "../repositories/taskRepository";
import { CreateInfo, InfoTask } from "../protocols/infoProtocols";
import { errors } from "@/errors/errors";



async function createTask (info: InfoTask): Promise<void>{
    if (await taskAlreadyExists(info.name)) throw errors.findConflit("Tarefa")

     await infoTaskRepository.createTask(info);
}
async function getTask():Promise<InfoTask[]> {
    const task = await infoTaskRepository.getTask()
    return task
}

async function taskAlreadyExists(resource:string): Promise<boolean> {
  const result = await infoTaskRepository.taskAlreadyExists(resource);
  if (result.rowCount > 0) {
    return true;
  } else {
    return false;
  }
}

async function deleteTask(id:string):Promise<InfoTask[]>{

    const result = await infoTaskRepository.deleteTask(id)
    return result
}

async function statusTask(id:string):Promise<InfoTask[]>{
    const result = await infoTaskRepository.statusTask(id);
    return result
}
export const infoTaskService ={createTask,getTask,deleteTask,statusTask}

