import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import LocalStrategy from '@app/auth/strategies/local.strategy';
import JwtStrategy from '@app/auth/strategies/jwt.strategy';
import jwtConstants from '@app/constants/authConstants';
import AuthController from '@app/controllers/auth.controller';
import UsersModule from '@infrastructure/modules/users.module';
import AuthService from '@domain/services/auth.service';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
    }),
  ],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy,
  ],
  controllers: [AuthController],
  exports: [AuthService],
})
export default class AuthModule {}
