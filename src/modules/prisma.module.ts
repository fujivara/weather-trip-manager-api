import { Module } from '@nestjs/common';
import { PrismaService } from '../db/prisma.service';
import { UserRepository } from '../db/repositories/user.repository';

@Module({
  providers: [PrismaService, UserRepository],
  exports: [PrismaService, UserRepository],
})
export class PrismaModule {}