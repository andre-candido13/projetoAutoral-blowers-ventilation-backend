import bcrypt from "bcrypt";
import { userRepository } from '../../repository/user';
import { UserParams } from "../../protocols";


export async function createUser({name, email, password, cpf}: UserParams) { 

  const createdAt = new Date()

  const hashedPassword = await bcrypt.hash(password, 10)

  return userRepository.createUser({
    name,
    email,
    password: hashedPassword,
    cpf,
    createdAt
  })
}


export const userService = {
  createUser,
};
