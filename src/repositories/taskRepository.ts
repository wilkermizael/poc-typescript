
import { db } from "../database/database";
import { CreateInfo } from "../protocols/infoProtocols";

async function createTask(info: CreateInfo) {
  return await db.query<CreateInfo>(
    `
    INSERT INTO infotask (name, description,date,amenable, status)
    VALUES ($1,$2, $3, $4, $5);
  `,
    [info.name, info.description, info.date, info.amenable, info.status]
  );
}
export const infoTaskRepository = {createTask}