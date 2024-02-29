import { IsIn, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class QueryAllDTO {
  @IsString()
  @ApiProperty()
  @IsOptional()
    search?: string;

  @IsString()
  @ApiProperty()
  @IsOptional()
    sort?: string;

  @IsIn(['asc', 'desc'], { message: 'Wrong value for order' })
  @ApiProperty()
  @IsOptional()
    order?: 'asc' | 'desc';
}
