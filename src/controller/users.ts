import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { userService } from "../services/user-services"



export async function createUser(req: Request, res: Response, next: NextFunction) {

const {name, email, password, cpf} = req.body

const createdAt = new Date()

try {

    await userService.createUser({name, email, password, cpf, createdAt})
    return res.status(httpStatus.CREATED).send(req.body);
    
    
} catch (err) {
 next(err)
}
}
  