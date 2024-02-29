import { ApiProperty } from '@nestjs/swagger';

export class TripResponse {
  @ApiProperty()
    id: string;

  @ApiProperty()
    userId: string;

  @ApiProperty()
    image: string;

  @ApiProperty()
    startDate: Date;

  @ApiProperty()
    endDate: Date;

  @ApiProperty()
    cityName: string;
}