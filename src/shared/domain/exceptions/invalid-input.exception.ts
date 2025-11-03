

export class InvalidFormateException extends Error {
    constructor(fieldName: string) {
        super(`Invalid ${fieldName} formate Exception`); 
        this.name = 'InvalidFormateException';
        
    }
}