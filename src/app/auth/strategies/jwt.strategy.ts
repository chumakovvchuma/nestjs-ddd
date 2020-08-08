import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

import { IJwtStrategyValidate } from '@domain/interfaces/auth/IJwtStrategyValidate.interface';

import UserDto from '@domain/dto/user/user.dto';
import jwtConstants from '@app/constants/authConstants';

@Injectable()
export default class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: UserDto): Promise<IJwtStrategyValidate> {
    return {
      id: payload.id,
      email: payload.email,
    };
  }
}
