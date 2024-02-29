import { Controller, UseGuards, Get, Res, Req, Post } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from '../services/auth.service';
import { GoogleGuard } from '../../security/google.guard';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserResponse } from '../responses/user.response';

@ApiTags('Auth')
@Controller('/auth')
export class AuthController {
  constructor (private authService: AuthService) {}

  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Get user data with token',
  })
  @ApiOkResponse({
    type: UserResponse,
  })
  @UseGuards(AuthGuard('jwt'))
  @Post('/login')
  async login (@Req() req: any): Promise<UserResponse> {
    return req.user;
  }

  @ApiOperation({
    summary: 'Sign in with google',
  })
  @UseGuards(GoogleGuard)
  @Get('/signInWithGoogle')
  async signInWithGoogle (): Promise<void> {}

  @ApiOperation({
    summary: 'Callback for Google auth',
  })
  @UseGuards(GoogleGuard)
  @Get('/signInWithGoogle/callback')
  async signInWithGoogleCallback (@Req() req: any, @Res() res: Response): Promise<void> {
    const { token } = await this.authService.signInWithGoogle(req.user);
    res.redirect(`https://weather-trip-manager-web.vercel.app/?token=${token}`);
  }
}
