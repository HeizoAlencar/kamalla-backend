
export abstract class IHashingService {
    abstract hash(password: string): Promise<string>;
    abstract comparePassword(password: string, hashedPassword: string): Promise<boolean>;
}