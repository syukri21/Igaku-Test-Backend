import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from './auth.service';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { JwtPayload } from './interfaces/payload.interface';
import { UserDto } from '../users/dto/user.dto';
console.log(
  'JwtStrategy -> constructor -> process.env.SECRETKEY',
  process.env.SECRETKEY,
);

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.SECRETKEY,
    });
  }

  async validate(payload: JwtPayload): Promise<UserDto> {
    console.log(
      'JwtStrategy -> classJwtStrategyextendsPassportStrategy -> payload',
      payload,
    );
    const user = await this.authService.validateUser(payload);
    if (!user) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
    return user;
  }
}
