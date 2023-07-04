import { Router } from "express";
import { handleApplicationError } from "../middleware";
import { createUser } from "../controller/users";




const signUpRouter = Router();

signUpRouter.post('/', handleApplicationError, createUser)


export default signUpRouter;