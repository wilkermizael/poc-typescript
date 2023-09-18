import { Errback, ErrorRequestHandler, NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

export default function errorHandling(error:any, req:Request, res:Response, next:NextFunction) {
	if (error.type === "alreadyExist"){
        return res.status(httpStatus.CONFLICT).send({message:"Tarefa já existe"});
    } 
	return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  
}