import { Controller, Get } from '@nestjs/common';
import { CityService } from '../services/city.service';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CityResponse } from '../responses/city.response';

@ApiTags('City')
@Controller('/cities')
export class CityController {
  constructor (private cityService: CityService) {}

  @ApiOperation({
    summary: 'Get all cities',
  })
  @ApiOkResponse({
    type: [CityResponse],
  })
  @Get()
  getAll (): Promise<CityResponse[]> {
    return this.cityService.getAll();
  }
}