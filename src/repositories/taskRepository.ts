
import { db } from "../database/database";
import { CreateInfo, InfoTask } from "../protocols/infoProtocols";

async function createTask(info: CreateInfo) {
  return await db.query<CreateInfo>(
    `
    INSERT INTO infotask (name, description,date,amenable, status)
    VALUES ($1,$2, $3, $4, $5);
  `,
    [info.name, info.description, info.date, info.amenable, info.status]
  );
}

async function taskAlreadyExists(name:string | number) {
      
       const result = await db.query<CreateInfo>(`SELECT * FROM infotask WHERE name=$1;`,[name])
       return result
}
async function getTask(){
  const result = await db.query<InfoTask>(`SELECT * FROM infotask`)
  return result.rows
}

async function deleteTask(id:string){
  const idTask = Number(id)
  const result = await db.query<InfoTask>(`DELETE * FROM infotask WHERE id=$1;`,[idTask])
  return result.rows
}

async function statusTask(id:string){
  const idTask = Number(id)
  const status = await db.query<InfoTask>(`SELECT * FROM infotask WHERE id=$1;`,[idTask]);
  if(status.rows[0].status === true){
    const result = await db.query<InfoTask>(`UPDATE infoTask SET status = false WHERE id =$1;`,[idTask]);
     return result.rows;
  }else{
     const result = await db.query<InfoTask>(`UPDATE infoTask SET status = true WHERE id =$1;`,[idTask]);
     console.log(result.rows)
     return result.rows;
  }
  
 
}
export const infoTaskRepository = {createTask, taskAlreadyExists,getTask,deleteTask,statusTask}