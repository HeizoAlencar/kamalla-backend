import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserBodyDTO } from './dtos/create-user.dto';

@Controller('user')
export class UserController {

    @Post()
    CreateUser(@Body("createUserBody") createUserBody:CreateUserBodyDTO ){
        
    }

}
