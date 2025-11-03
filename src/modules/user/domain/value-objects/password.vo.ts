import { BusinessRuleException } from "@/shared/domain/exceptions/business-rule.exception";

export class Password {
    
    private constructor(private readonly value: string) {
        this.value = value;
    }

    public static create(value: string): Password {
        const PasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        
        if(!value) throw new BusinessRuleException('Password must be provided');
      
        if(!PasswordRegex.test(value)) throw new BusinessRuleException('Must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number and one special character like @$!%*?&');
        return new Password(value)
    }
    
    public getValue(): string {
        return this.value;
    }
}
