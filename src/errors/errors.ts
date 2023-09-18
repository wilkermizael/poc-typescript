export function findConflit(resource:string) {
  return {
    type: "alreadyExist",
    message: `${resource} já existe`,
  };
}
export function findTask(resource:string) {
  return {
    type: "noTask",
    message: `${resource}`,
  };
}
export const errors = {
  findConflit,
  findTask
};
