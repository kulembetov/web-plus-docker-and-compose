import { PartialType } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Length,
} from 'class-validator';
import { CreateWishDto } from './createWsh.dto';

export class UpdateWishDto extends PartialType(CreateWishDto) {
  @IsOptional()
  @IsNotEmpty()
  @Length(1, 250, { message: 'Строка должна включать от 1 до 250 символов' })
  @IsString()
  name: string;
  @IsOptional()
  @IsUrl()
  @IsNotEmpty()
  link: string;
  @IsOptional()
  @IsNotEmpty()
  @IsUrl()
  image: string;
  @IsOptional()
  @IsNotEmpty()
  price: number;
  @IsOptional()
  @IsNotEmpty()
  @Length(1, 1024, { message: 'Строка должна включать от 1 до 1024 символов' })
  @IsString()
  description: string;
}
