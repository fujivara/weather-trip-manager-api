import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth.module';
import * as process from 'process';
import { TripModule } from './modules/trip.module';

@Module({
  imports: [
    AuthModule,
    TripModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [process.env.NODE_ENV, '.env'],
    }),
  ],
})
export class AppModule {}
