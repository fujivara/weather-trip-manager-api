import { Controller, Get } from '@nestjs/common';
import { CityService } from '../services/city.service';

@Controller('/cities')
export class CityController {
  constructor (private cityService: CityService) {}

  @Get()
  getAll () {
    return this.cityService.getAll();
  }
}