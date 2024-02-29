import { IsDate, IsString, IsUrl } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTripDto {
  @IsString()
  @ApiProperty()
    cityName: string;

  @Type(() => Date)
  @IsDate()
  @ApiProperty()
    startDate: Date;

  @Type(() => Date)
  @IsDate()
  @ApiProperty()
    endDate: Date;

  @IsUrl()
  @ApiProperty()
    image: string;
}