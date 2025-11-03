

import type { UserEntity } from '@modules/user/domain/entities/user.entity';
import { CreateUserDTO } from '../use-cases/create-user/create-user.dto';




export interface IUserRepository {
  // findAll(args:UserFindManyArgs): Promise<UserModel[] | null>;
  // findUnique(args: UserFindUniqueArgs): Promise<UserModel[] | null>;
  // getById(id:string): Promise<UserEntity | null>;
  createUser(user:UserEntity): Promise<void>;
  // updateUser(id:string,data:UpdateUserBodyDTO): Promise<UserEntity>;
  // deleteUser(id:string): Promise<void>;
  // getAllUsers(): Promise<UserEntity[] | null>;
}