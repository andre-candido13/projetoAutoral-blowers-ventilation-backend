import prisma from "../config/database";
import { UserParams } from "../protocols";


export async function createUser(users: UserParams) {
return await prisma.users.create({
        data: users,
       
    
    })
}

export const userRepository = {
    createUser
}