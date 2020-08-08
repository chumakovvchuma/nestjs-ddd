import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import UsersController from '@app/controllers/users.controller';
import UserService from '@domain/services/user.service';
import UserEntity from '@domain/entities/user/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
  ],
  controllers: [UsersController],
  providers: [UserService],
  exports: [UserService],
})
export default class UsersModule {}
