import { Module } from '@nestjs/common';
import { UserController } from './infrastructure/http/user.controller';
import { PrismaService } from '@/database/prisma.service';
import { PrismaUserRepository } from '@/modules/user/infrastructure/persistence/prisma.user.repository';
import { UserService } from '@/modules/user/application/user.service';

@Module({
    controllers: [UserController],
    providers: [UserService,PrismaUserRepository,PrismaService],
})
export class UserModule {}
