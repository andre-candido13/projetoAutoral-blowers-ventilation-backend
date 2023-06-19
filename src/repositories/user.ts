import { prisma } from "../configs/database";
import { Prisma } from "@prisma/client";

export async function createUser () {

return prisma.users.create({
    
})


}