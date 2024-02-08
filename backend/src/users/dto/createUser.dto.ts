import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsUrl,
  Length,
  IsOptional,
} from 'class-validator';

export class CreateUserDto {
  @Length(2, 30, { message: 'Строка должна включать от 2 до 30 символов' })
  @IsString()
  username: string;

  @IsOptional()
  @IsString()
  about?: string;

  @IsOptional()
  @IsUrl()
  avatar?: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Length(6, 20, { message: 'Строка должна включать от 6 до 20 символов' })
  password: string;
}
