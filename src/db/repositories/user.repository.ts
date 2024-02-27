import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserRepository {
  constructor (private prismaService: PrismaService) {}

  async find (args: Prisma.UserFindUniqueArgs) {
    return this.prismaService.user.findUnique(args);
  }

  async create (data: Prisma.UserCreateInput) {
    return this.prismaService.user.create({ data });
  }

}