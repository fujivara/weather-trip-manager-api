import { ApiProperty } from '@nestjs/swagger';

export class ShortUserResponse {
  @ApiProperty()
    id: string;

  @ApiProperty()
    email: string;
}

export class UserResponse extends ShortUserResponse {
  @ApiProperty()
    firstname: string;

  @ApiProperty()
    lastname: string;

  @ApiProperty()
    avatar: string;
}
