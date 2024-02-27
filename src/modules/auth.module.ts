import { Module } from '@nestjs/common';
import { AuthController } from '../api/controllers/auth.controller';
import { AuthService } from '../api/services/auth.service';
import { JwtModule } from '@nestjs/jwt';
import * as process from 'process';
import { GoogleStrategy } from '../security/google.strategy';
import { GoogleGuard } from '../security/google.guard';
import { PrismaModule } from './prisma.module';
import { JwtStrategy } from '../security/jwt.strategy';

@Module({
  imports: [
    PrismaModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: process.env.EXPIERS_IN,
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, GoogleStrategy, JwtStrategy, GoogleGuard],
})
export class AuthModule {}