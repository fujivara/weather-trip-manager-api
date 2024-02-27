import { Body, Controller, Get, Post, Query, Req, UseGuards } from '@nestjs/common';
import { TripService } from '../services/trip.service';
import { AuthGuard } from '@nestjs/passport';
import { CreateTripDto } from '../dtos/create-trip.dto';
import { QueryAllDTO } from '../dtos/query-all.dto';

@Controller('/trips')
export class TripController {
  constructor (private tripService: TripService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create (@Body() body: CreateTripDto, @Req() req: any) {
    return this.tripService.create(body, req.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  getAllForUser (@Query() query: QueryAllDTO, @Req() req: any) {
    return this.tripService.getAllForUser(query, req.user);
  }
}