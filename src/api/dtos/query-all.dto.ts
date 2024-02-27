import { IsIn, IsOptional, IsString } from 'class-validator';

export class QueryAllDTO {
  @IsString()
  @IsOptional()
    search?: string;

  @IsString()
  @IsOptional()
    sort?: string;

  @IsIn(['asc', 'desc'], { message: 'Wrong value for order' })
  @IsOptional()
    order?: 'asc' | 'desc';
}
