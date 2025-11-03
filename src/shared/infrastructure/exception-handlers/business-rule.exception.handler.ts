
import { ExceptionHandler } from "./exception.handler";
import { BadRequestException, Logger } from "@nestjs/common";
import { BusinessRuleException } from "@/shared/domain/exceptions/business-rule.exception";

export class BusinessRuleExceptionHandler extends ExceptionHandler<BusinessRuleException> { 

  private logger = new Logger(BusinessRuleExceptionHandler.name)
  
  constructor(){
    super()
  }
  
  handle(exception: BusinessRuleException): void {
    this.logger.error(exception.message);
    throw new BadRequestException(exception.message);
  }
}