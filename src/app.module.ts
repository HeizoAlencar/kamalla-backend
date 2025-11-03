
import { Module } from '@nestjs/common';
import { UserModule } from '@modules/user/user.module';
import { AuthModule } from '@thallesp/nestjs-better-auth';
import { auth } from './auth/auth';

@Module({
  imports: [
    UserModule,
    AuthModule.forRoot({ auth })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
