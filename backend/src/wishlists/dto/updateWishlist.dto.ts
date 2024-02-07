import { IsArray, IsNumber, IsString, IsUrl, Length } from 'class-validator';

export class UpdateWishlistDto {
  @IsString()
  @Length(1, 250, { message: 'Строка должна включать от 1 до 250 символов' })
  name?: string;

  @IsUrl()
  @IsString()
  image?: string;

  @IsArray()
  @IsNumber({}, { each: true })
  itemsId?: number[];
}
