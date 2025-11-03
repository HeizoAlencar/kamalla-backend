import { UserEntity } from "@/modules/user/domain/entities/user.entity";
import { IUserRepository } from "../../repositories/user.repository.interface";
import { CreateUserDTO } from "./create-user.dto";
import { Username } from "@/modules/user/domain/value-objects/username.vo";
import { Email } from "@/modules/user/domain/value-objects/email.vo";
import { PersonName } from "@/modules/user/domain/value-objects/person-name.vo";
import { Uuid } from "@/shared/domain/value-objects/uuid.vo";
import { IHashingService } from "../../services/hashing.service.interface";


export class CreateUserUseCase { 
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly hashingService: IHashingService
  ) {}

   async execute(dto: CreateUserDTO): Promise<UserEntity> {
    
    const {
            username,
            email,
            password,
            firstName,
            lastName,
            ...restOfDto
        } = dto;

  const hashedPassword = await this.hashingService.hash(password);
    
   const usernameVO = Username.create(username);
   const emailVO = Email.create(email);
    
    const user = UserEntity.create({
      id: Uuid.create(),
      username: usernameVO,
      personName: PersonName.create(firstName, lastName),
      email: emailVO,
      passwordHash: hashedPassword,
      ...restOfDto
    });
    
    await this.userRepository.createUser(user);
    return user;
  }
}