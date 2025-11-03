import { BusinessRuleException } from "@/shared/domain/exceptions/business-rule.exception";

export class Email {

    private constructor(private readonly value: string) {
        this.value = value;
    }
    
    public static create(value: string): Email {
        const  emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value))throw new BusinessRuleException('Invalid email format, please provide a valid email address like example@example.com.');
        
        return new Email(value);
    }

    
    public getValue(): string {
        return this.value;
    }
}
