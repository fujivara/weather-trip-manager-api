import { Injectable } from '@nestjs/common';
import { TripRepository } from '../../db/trip.repository';
import { CreateTripDto } from '../dtos/create-trip.dto';
import { User } from '@prisma/client';
import { QueryAllDTO } from '../dtos/query-all.dto';

@Injectable()
export class TripService {
  constructor (private tripRepository: TripRepository) {}

  create (body: CreateTripDto, user: User) {
    return this.tripRepository.create({
      userId: user.id,
      ...body,
    });
  }

  getAllForUser (query: QueryAllDTO, user: User) {
    return this.tripRepository.findMany({
      where: {
        cityName: {
          contains: query.search,
          mode: 'insensitive',
        },
        userId: user.id,
      },
      orderBy: {
        startDate: query.order,
      },
    });
  }
}