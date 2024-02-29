import { Body, Controller, Get, Post, Query, Req, UseGuards } from '@nestjs/common';
import { TripService } from '../services/trip.service';
import { AuthGuard } from '@nestjs/passport';
import { CreateTripDto } from '../dtos/create-trip.dto';
import { QueryAllDTO } from '../dtos/query-all.dto';
import { TripResponse } from '../responses/trip.response';
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Trip')
@Controller('/trips')
export class TripController {
  constructor (private tripService: TripService) {}

  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Create trip',
  })
  @ApiOkResponse({
    type: TripResponse,
  })
  @UseGuards(AuthGuard('jwt'))
  @Post()
  create (@Body() body: CreateTripDto, @Req() req: any): Promise<TripResponse> {
    return this.tripService.create(body, req.user);
  }

  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Get all trips for user',
  })
  @ApiOkResponse({
    type: [TripResponse],
  })
  @UseGuards(AuthGuard('jwt'))
  @Get()
  getAllForUser (@Query() query: QueryAllDTO, @Req() req: any): Promise<TripResponse[]> {
    return this.tripService.getAllForUser(query, req.user);
  }
}