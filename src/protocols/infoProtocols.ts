export type InfoTask ={
    id:number,
    name:string,
    description:string,
    date: string | Date,
    amenable:string,
    status:boolean
}

export type CreateInfo = Omit<InfoTask, "id">;