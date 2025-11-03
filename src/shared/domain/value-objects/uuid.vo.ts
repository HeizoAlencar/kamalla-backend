
import { v4 as uuidv4, validate as uuidValidate } from 'uuid';
import { BusinessRuleException } from '../exceptions/business-rule.exception';

export class Uuid {
    private constructor(private readonly value: string) {
  
        if (!uuidValidate(value)) {
            throw new BusinessRuleException('Invalid UUID format');
        }
    }

    public static create(): Uuid {
        return new Uuid(uuidv4());
    }

    public static from(value: string): Uuid {
        return new Uuid(value);
    }
    
    public getValue(): string {
        return this.value;
    }
}