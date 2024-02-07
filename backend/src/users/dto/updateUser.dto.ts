import { IsEmail, IsOptional, IsString, Length } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  @Length(2, 30, { message: 'Строка должна включать от 2 до 30 символов' })
  username?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  @Length(6, 20, { message: 'Строка должна включать от 6 до 20 символов' })
  password?: string;

  @IsOptional()
  @IsString()
  @Length(2, 200, { message: 'Строка должна включать от 2 до 200 символов' })
  about?: string;

  @IsOptional()
  @IsString()
  avatar?: string;
}
