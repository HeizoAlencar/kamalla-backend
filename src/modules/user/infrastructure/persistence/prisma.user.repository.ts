
import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/database/prisma.service';
import { IUserRepository } from "@/modules/user/application/repositories/user.repository.interface";
import type * as Prisma from "@database/prisma/models";
import { UserEntity } from '../../domain/entities/user.entity';
import { DatabaseException } from '@/shared/domain/exceptions/database.exception';
import { UserAlreadyExistsException } from '../../application/exceptions/user-already-exists.exception';

@Injectable()
export class PrismaUserRepository implements IUserRepository {
  constructor(private prisma:PrismaService) {}
  
  
  async createUser(user:UserEntity): Promise<void> {
    
    try{
       await this.prisma.user.create({
        data: {
          id: user.getId(),
          email: user.getEmail(),
          username: user.getUsername(),
          firstName: user.getFirstName(),
          lastName: user.getLastName(),
          password: user.getPasswordHash(),
          userRole: user.getUserRole(),
          createdAt: user.getCreatedAt(),
          updatedAt: user.getUpdatedAt(),
          emailVerified: user.isEmailVerified()
        }
      })
      
    }
    catch(error){
      if (error.code === 'P2002') {
                throw new UserAlreadyExistsException();
          }
      throw new DatabaseException(`Failed to create user in database, ${error.message}`);
    }finally{
       Promise.resolve();
    }
   
    
    
  }

  // getById(id:string): Promise<Prisma.UserModel | null> {
  //   return this.prisma.user.findUnique({
  //     where:{ id:id }
  //   });
  // }
  
  // getAllUsers(): Promise<Prisma.UserModel[] | null> {
  //   return this.prisma.user.findMany();
  // }

  // updateUser(id:string,data:Prisma.UserUpdateInput): Promise<Prisma.UserModel> {

  //   return this.prisma.user.update({
  //     where: {id:id},
  //     data:data
  //   });

  // }

  // deleteUser(id:string): Promise<void> {

  //   this.prisma.user.update({
  //     where: {id:id},
  //     data:{
  //       deletedAt: new Date().getUTCDate().toString()
  //     }
  //   });

  //   return Promise.resolve();
    
    
  // }
}