import { BusinessRuleException } from "@/shared/domain/exceptions/business-rule.exception";

export class Username {

    
    private constructor(private readonly value: string) {
        this.value = value;
    }

    public static  create(value: string): Username {
        const UsernameRegex = /^[a-zA-Z0-9_-]{3,16}$/
        
        if(!value) throw new BusinessRuleException('Username must be provided');
        
        const normalizedValue = value.trim().toLowerCase();
        
        if(!UsernameRegex.test(normalizedValue)) throw new BusinessRuleException('Username must be 3-16 characters long and contain only letters, numbers, underscores, or hyphens');
        return new Username(normalizedValue)
    }
    
    public getValue(): string {
        return this.value;
    }
}
