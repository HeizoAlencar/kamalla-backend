import { Injectable,} from '@nestjs/common';

import { UserEntity } from '@modules/user/domain/entities/user.entity';

import { CreateUserDTO } from '../../application/use-cases/create-user/create-user.dto';
import { BcryptHashingService } from './bcrypt-hashing.service';
import { CreateUserUseCase } from '../../application/use-cases/create-user/create-user.use-case';
import { PrismaUserRepository } from '../persistence/prisma.user.repository';

@Injectable()
export class UserService {
    constructor(
      private UserRepo:PrismaUserRepository,
      private HashService:BcryptHashingService

    ) {}

    async createUser(data:CreateUserDTO): Promise<UserEntity>{
      const createUserUseCase = new CreateUserUseCase(this.UserRepo,this.HashService);
      return createUserUseCase.execute(data);
    }
    
    // async getAllUsers(): Promise<UserEntity[] | null>{
    //     return this.UserRepo.getAllUsers();
    // }

    // async updateUser(id:string, data:UpdateUserBodyDTO): Promise<UserEntity>{
    //     return this.UserRepo.updateUser(id,data)
    // }
    
    // async deleteUser(id:string): Promise<void>{
    //     return this.UserRepo.deleteUser(id);
    // }
    
    // async getUserById(id:string): Promise<UserEntity | null>{
    //     return this.UserRepo.getById(id);
    // }
    
    // async replaceUser(id:string, data:ReplaceUserBodyDTO): Promise<UserEntity>{
 
    //       return this.UserRepo.updateUser(id,data)
       
        
    // }
}
