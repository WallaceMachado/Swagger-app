/* eslint-disable prettier/prettier */
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const id= user_id;
    const userExists = this.usersRepository.findById(id);

    if(!userExists){
      throw new Error("Mensagem do erro");
    }
    const user = this.usersRepository.findById(id);
    return user;
  }
}

export { ShowUserProfileUseCase };
