import { IsNotEmpty, IsString, Matches, MaxLength } from 'class-validator';

export class CreateCategoryDto {
  /**
   * El nombre de la categoria (puede contener maximo 50 caracteres, letras minúsculas, letras mayúsculas, números y - )
   * @example "hard-disk"
   */
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  @Matches(/^[a-zA-Z0-9-]*$/, { message: `El nombre de la categoría solo puede contener letras en mayúsculas, en minúsculas, números y el caracter especial -` })
  name: string;
}

export class UpdateCategoryDto {
  /**
   * El nombre de la categoria (puede contener maximo 50 caracteres, letras minúsculas, letras mayúsculas, números y - )
   * @example "printer"
   */
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  @Matches(/^[a-zA-Z0-9-]*$/, { message: `El nombre de la categoría solo puede contener letras en mayúsculas, en minúsculas, números y el caracter especial -` })
  name: string;
}
