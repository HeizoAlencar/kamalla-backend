

import {  ConflictException, Logger } from "@nestjs/common";
import { ExceptionHandler } from "@/shared/infrastructure/exception-handlers/exception.handler";
import { UserAlreadyExistsException } from "../../application/exceptions/user-already-exists.exception";

export class UserAlreadyExistsExceptionHandler extends ExceptionHandler<UserAlreadyExistsException> { 

  private logger = new Logger(UserAlreadyExistsExceptionHandler.name)
  
  constructor(){
    super()
  }
  
  handle(exception: UserAlreadyExistsException): void {
    this.logger.error(exception.message);
    throw new ConflictException(exception.message);
  }
}