import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma.module';
import { CityService } from '../api/services/city.service';
import { CityController } from '../api/controllers/city.controller';

@Module({
  imports: [PrismaModule],
  controllers: [CityController],
  providers: [CityService],
})
export class CityModule {}