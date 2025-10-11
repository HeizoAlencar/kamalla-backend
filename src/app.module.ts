import { Module } from '@nestjs/common';
import { UserController } from './routes/user/user.controller';


@Module({
  imports: [],
  controllers: [UserController],
  providers: [],
})
export class AppModule {}
