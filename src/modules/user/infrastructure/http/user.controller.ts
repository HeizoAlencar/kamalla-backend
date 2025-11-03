import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { CreateUserRequestDTO } from '@modules/user/infrastructure/http/dtos/create-user.request.dto';
import { UserService } from '@/modules/user/infrastructure/services/user.service';
import { UpdateUserRequestDTO } from '@modules/user/infrastructure/http/dtos/update-user.request.dto';
import { UserEntity } from '@modules/user/domain/entities/user.entity';
import { ExceptionHandler } from '@/shared/infrastructure/exception-handlers/exception.handler';
import { AllowAnonymous } from '@thallesp/nestjs-better-auth';
import { BusinessRuleException } from '@/shared/domain/exceptions/business-rule.exception';
import { BusinessRuleExceptionHandler } from '@/shared/infrastructure/exception-handlers/business-rule.exception.handler';

@Controller('users')
export class UserController {
    private handlers: Map<string, ExceptionHandler<Error> >
  
  
    constructor(private userService:UserService) {
      this.handlers = new Map<string, ExceptionHandler<Error>>
      this.registerHandlers();
    }
    
    private registerHandlers(){
      this.handlers.set(BusinessRuleException.name, new BusinessRuleExceptionHandler());
    }
    
    private handleException(exception: Error): void {
      const handler = this.handlers.get(exception.name);
      if (handler) {
        handler.handle(exception);
      }
    }

    @Post()
    @AllowAnonymous()
    CreateUser(@Body() createUserBody:CreateUserRequestDTO ):Promise<UserEntity| null > | void  {
        try{
          return this.userService.createUser(createUserBody);
        }catch(exception){
          this.handleException(exception);
        }
    }
    
    // @Get()
    // @AllowAnonymous()
    // GetAllUsers():Promise<UserEntity[] | null>{
    //     return this.userService.getAllUsers();
    // }
    
    // @Get(":id")
    // @AllowAnonymous()
    // GetUserById(@Param("id") id:string):Promise<UserEntity | null>{
    //     return this.userService.getUserById(id);
    // }

    // @Patch(":id")
    // @AllowAnonymous()
    // UpdateUser(@Param("id") id:string, @Body() updateUserBodyDTO:UpdateUserRequestDTO):Promise<UserEntity>{
    //     return this.userService.updateUser(id,updateUserBodyDTO)
    // }
    
    // @Put(":id")
    // @AllowAnonymous()
    // ReplaceUser(@Param("id") id:string, @Body() updateUserBodyDTO:UpdateUserRequestDTO):Promise<UserEntity>{
    //     return this.userService.updateUser(id,updateUserBodyDTO)
    // }
    
    // @Delete(":id")
    // @AllowAnonymous()
    // DeleteUser(@Param("id") id:string):Promise<void>{
    //     return this.userService.deleteUser(id);
    }

}
