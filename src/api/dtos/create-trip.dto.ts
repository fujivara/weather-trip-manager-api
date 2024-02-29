import { IsDate, IsString, IsUrl } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateTripDto {
  @IsString()
    cityName: string;

  @Type(() => Date)
  @IsDate()
    startDate: Date;

  @Type(() => Date)
  @IsDate()
    endDate: Date;

  @IsUrl()
    image: string;
}