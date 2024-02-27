import { IsDate, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateTripDto {
  @IsString()
    city: string;

  @Type(() => Date)
  @IsDate()
    startDate: Date;

  @Type(() => Date)
  @IsDate()
    endDate: Date;
}