import { Controller, UseGuards, Get, Res, Req, Post } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from '../services/auth.service';
import { GoogleGuard } from '../../security/google.guard';
import { AuthGuard } from '@nestjs/passport';
import { User } from '@prisma/client';

@Controller('/auth')
export class AuthController {
  constructor (private authService: AuthService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('/login')
  async login (@Req() req: any): Promise<User> {
    return req.user;
  }

  @UseGuards(GoogleGuard)
  @Get('/signInWithGoogle')
  async signInWithGoogle (): Promise<void> {}

  @UseGuards(GoogleGuard)
  @Get('/signInWithGoogle/callback')
  async signInWithGoogleCallback (@Req() req: any, @Res() res: Response): Promise<void> {
    const { token } = await this.authService.signInWithGoogle(req.user);
    res.redirect(`https://weather-trip-manager-web.vercel.app/?token=${token}`);
  }
}
