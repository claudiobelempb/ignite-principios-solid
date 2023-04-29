import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    // verificar user exist pelo seu user_id
    const user = this.usersRepository.findById(user_id);
    // se existir
    if (!user) {
      throw new Error("User doest exists");
    }

    this.usersRepository.turnAdmin(user);
    return user;
  }
}

export { TurnUserAdminUseCase };
