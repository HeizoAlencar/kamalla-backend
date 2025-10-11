import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    findUser(){
        return "Hello User"
    }
}
