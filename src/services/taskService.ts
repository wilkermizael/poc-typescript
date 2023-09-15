import { infoTaskRepository } from "../repositories/taskRepository";
import { InfoTask } from "../protocols/infoProtocols";

export async function createTask (info: InfoTask): Promise<void>{
     /*if (await taskAlreadyExists(info)) {
       throw { message: "Tarefa já existe" };
     }*/

     await infoTaskRepository.createTask(info);
}

export const inforTaskService ={createTask}