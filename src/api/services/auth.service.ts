import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from '../../db/repositories/user.repository';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor (
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async signInWithGoogle (user: any) {
    const findUser = await this.userRepository.find({ where: { email: user.email } });

    if (!findUser) {
      const newUser = await this.userRepository.create({
        email: user.email,
        password: await this.hashPass(user.sub),
      });

      return this.getToken(newUser);
    }

    if (!(await bcrypt.compare(user.sub, findUser.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return this.getToken(findUser);
  }

  async hashPass (password: string) {
    const saltRounds = 11;
    const salt = await bcrypt.genSalt(saltRounds);
    return bcrypt.hash(password, salt);
  }

  async getToken (user: any) {
    const payload = { sub: user.id, email: user.email, createdAt: Date.now() };
    return { token: this.jwtService.sign(payload) };
  }
}