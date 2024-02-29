import { Injectable } from '@nestjs/common';
import { CityRepository } from '../../db/repositories/city.repository';

@Injectable()
export class CityService {

  constructor (private cityRepository: CityRepository) {}

  getAll () {
    return this.cityRepository.findMany({});
  }
}
