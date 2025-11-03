import { Module } from '@nestjs/common';
import { UserController } from './infrastructure/http/user.controller';
import { PrismaService } from '@/database/prisma.service';
import { PrismaUserRepository } from '@/modules/user/infrastructure/persistence/prisma.user.repository';
import { UserService } from '@/modules/user/infrastructure/services/user.service';
import { BcryptHashingService } from './infrastructure/services/bcrypt-hashing.service';

@Module({
    controllers: [UserController],
    providers: [
        UserService,
        PrismaUserRepository,
        PrismaService,
        BcryptHashingService
    ],
})
export class UserModule {}
