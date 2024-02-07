import { IsNumber, IsOptional, IsString, IsUrl, Length } from 'class-validator';

export class CreateWishDto {
  @Length(1, 250, { message: 'Строка должна включать от 1 до 250 символов' })
  name: string;

  @IsString()
  link: string;

  @IsUrl()
  image: string;

  @IsNumber()
  price: number;

  @IsString()
  @Length(1, 1024, { message: 'Строка должна включать от 1 до 1024 символов' })
  @IsOptional()
  description?: string;
}
