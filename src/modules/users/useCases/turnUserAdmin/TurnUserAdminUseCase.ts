/* eslint-disable prettier/prettier */
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const id= user_id;
    const user = this.usersRepository.findById(id);
    const newUser = this.usersRepository.turnAdmin(user);
    return newUser;
  }
}

export { TurnUserAdminUseCase };
