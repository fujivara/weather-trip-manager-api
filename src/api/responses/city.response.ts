import { ApiProperty } from '@nestjs/swagger';

export class CityResponse {
  @ApiProperty()
    name: string;

  @ApiProperty()
    image: string;
}