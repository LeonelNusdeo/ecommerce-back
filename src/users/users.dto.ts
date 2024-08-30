import {
  IsEmail,
  IsEmpty,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { PasswordMatch } from '../decorators/passwordmatch.decorator';
import { ApiHideProperty } from '@nestjs/swagger';

export class CreateUserDto {
  /**
   * El nombre del usuario (debe contener letras en mayúscula/minúscula y caracteres especiales -'. )
   * @example "Robert Downey Jr."
   */
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(80)
  @Matches(/^[a-zA-Z\s.'-]+$/, { message: `El nombre del usuario solo debe contener letras en mayúscula, en minúscula y caracteres especiales -'. ` })
  name: string;

  /**
   * El email del usuario (estructura valida de email, único)
   * @example "robert@mail.com"
   */
  @IsNotEmpty()
  @IsEmail()
  email: string;

  /**
   * La contraseña del usuario (debe contener al menos una letra minúscula, una mayúscula, un número y un caracter especial !@#$%^&* )
   * @example Pass123!
   */
  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(15)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/, { message: `La contraseña debe contener al menos una letra minúscula, una mayúscula, un número y un caracter especial !@#$%^&* ` })
  password: string;

  /**
   * La confirmacion de la contraseña del usuario (debe coincidir con el valor del campo password)
   * @example Pass123!
   */
  @IsNotEmpty()
  @PasswordMatch('password')
  confirmPassword: string;

  /**
   * El teléfono del usuario
   * @example 45551234
   */
  @IsNotEmpty()
  @IsNumber()
  phone: number;

  /**
   * El domicilio del usuario
   * @example "Calle Falsa, 123"
   */
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(80)
  address: string;

  /**
   * La ciudad de residencia del usuario
   * @example "New York"
   */
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(20)
  city: string;

  /**
   * El país de residencia del usuario
   * @example "United States of America"
   */
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  @MaxLength(25)
  country: string;

  @ApiHideProperty()
  @IsEmpty()
  isAdmin: boolean;
}

export class UpdateUserDto {
    /**
   * El nombre del usuario (debe contener letras en mayúscula/minúscula y caracteres especiales -'., )
   * @example "Anya Taylor-Joy"
   */
  @IsOptional()
  @IsString()
  @MinLength(3)
  @MaxLength(80)
  @Matches(/^[a-zA-Z\s.'-]+$/, { message: `El nombre del usuario solo debe contener letras en mayúscula, en minúscula y caracteres especiales -'. ` })
  name: string;

  /**
   * El email del usuario (estructura valida de email, único)
   * @example "anya@mail.com"
   */
  @IsOptional()
  @IsEmail()
  email: string;

  /**
   * La contraseña del usuario (debe contener al menos una letra minúscula, una mayúscula, un número y un caracter especial !@#$%^&*)
   * @example Pass456!
   */
  @IsOptional()
  @IsString()
  @MinLength(8)
  @MaxLength(15)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/, { message: `La contraseña debe contener al menos una letra minúscula, una mayúscula, un número y un caracter especial !@#$%^&* ` })
  password: string;

  /**
   * El teléfono del usuario
   * @example 45555678
   */
  @IsOptional()
  @IsNumber()
  phone: number;

  /**
   * El domicilio del usuario
   * @example "Av. Falsa, 456"
   */
  @IsOptional()
  @IsString()
  @MinLength(3)
  @MaxLength(80)
  address: string;
  
  /**
   * La ciudad de residencia del usuario
   * @example "London"
   */
  @IsOptional()
  @IsString()
  @MinLength(5)
  @MaxLength(20)
  city: string;
  
  /**
   * El país de residencia del usuario
   * @example "United Kingdom"
   */
  @IsOptional()
  @IsString()
  @MinLength(4)
  @MaxLength(25)
  country: string;

  @ApiHideProperty()
  @IsEmpty()
  isAdmin: boolean;
}
