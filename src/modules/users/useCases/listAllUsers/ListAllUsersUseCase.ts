/* eslint-disable prettier/prettier */
import { UsersRepository } from "modules/users/repositories/implementations/UsersRepository";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const id = user_id;
    const userAdmin = this.usersRepository.findById(id);

    if(!userAdmin.admin || !userAdmin){
      throw new Error("Mensagem do erro");
    }

   const users=this.usersRepository.list();
   
   return users;
  }
}

export { ListAllUsersUseCase };
