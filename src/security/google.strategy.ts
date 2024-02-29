import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';
import * as process from 'process';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor () {
    super({
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: `${process.env.BASE_URL}/auth/signInWithGoogle/callback`,
      scope: ['email', 'profile'],
    });
  }

  async validate (accessToken: string, refreshToken: string, profile: any) {
    const { name, emails, photos } = profile;
    return {
      email: emails[0].value,
      firstName: name.givenName,
      lastName: name.familyName,
      avatar: photos[0].value,
      sub: profile.id,
    };
  }
}
