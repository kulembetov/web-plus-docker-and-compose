import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsUrl,
  Length,
  IsOptional,
} from 'class-validator';

export class CreateUserDto {
  @IsOptional()
  @Length(2, 30, { message: 'Строка должна включать от 2 до 30 символов' })
  @IsString()
  username: string;

  @IsOptional()
  @Length(2, 200, { message: 'Строка должна включать от 2 до 200 символов' })
  @IsOptional()
  about: string;

  @IsString()
  @IsOptional()
  @IsUrl()
  avatar: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Length(6, 20)
  password: string;
}
