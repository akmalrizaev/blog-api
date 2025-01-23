import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePostMetaOptinsDto {
  @IsString()
  @IsNotEmpty()
  key: string;

  @IsNotEmpty()
  value: any;
}
