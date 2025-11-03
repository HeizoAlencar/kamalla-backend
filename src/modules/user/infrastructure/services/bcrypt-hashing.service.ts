import bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { IHashingService } from '../../application/services/hashing.service.interface';

@Injectable()
export class BcryptHashingService implements IHashingService {
    private readonly salt = bcrypt.genSaltSync(12);

    async hash(password: string): Promise<string> {
        return await bcrypt.hash(password, this.salt);
    }

    async comparePassword(password: string, hashedPassword: string): Promise<boolean> {
        return await bcrypt.compare(password, hashedPassword);
    }
}
