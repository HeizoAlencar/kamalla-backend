import { BusinessRuleException } from "@/shared/domain/exceptions/business-rule.exception";

export class PersonName {
  
  private readonly firstName: string;
  private readonly lastName: string;
  
      
    private constructor(FirstName: string,LastName:string) {
        this.firstName = FirstName;
        this.lastName = LastName;
    }

    public static  create(firstName: string, lastName:string): PersonName {
      
        const PersonNameRegex = /^[a-zA-Z]{3,64}$/
        
        if(!firstName) throw new BusinessRuleException('First name must be provided');
        if(!lastName) throw new BusinessRuleException('Last name must be provided');
        
        const firstNameNormalized = firstName.trim().toLowerCase();
        const lastNameNormalized = lastName.trim().toLowerCase();
        
        if(!PersonNameRegex.test(firstNameNormalized)) throw new BusinessRuleException('First name must be 3-64 characters long and contain only letters like João');
        if(!PersonNameRegex.test(lastNameNormalized)) throw new BusinessRuleException('Last name must be 3-64 characters long and contain only letters like Silva');
        return new PersonName(firstName,lastName)
    }
    
    public getValue(): {firstName: string, lastName: string, fullName: string} {
        return {
          firstName: this.firstName,
          lastName: this.lastName,
          fullName: this.getFullName()
        };
    }
    
    public getFirstName(): string {
        return this.firstName;
    }
    
    public getLastName(): string {
        return this.lastName;
    }
    
    public getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}
