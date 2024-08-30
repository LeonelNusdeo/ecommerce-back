import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
} from 'class-validator';
import { Category } from '../categories/categories.entity';
import { NumMaxLength } from '../decorators/nummaxlength.decorator';

export class CreateProductDto {
  /**
   * El nombre del producto
   * @example "Samsung Galaxy Z Flip 5"
   */
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  name: string;

  /**
   * La description del producto
   * @example "The best smartphone in the world"
   */
  @IsNotEmpty()
  @IsString()
  description: string;

  /**
   * El precio del producto (debe contener maximo 8 digitos y 2 decimales, separados por un . )
   * @example "1119.99"
   */
  @IsNotEmpty()
  @IsNumber()
  @NumMaxLength(8, 2)
  price: number;

  /**
   * El stock del producto (debe ser un numero entero -sin decimales-)
   * @example "100"
   */
  @IsNotEmpty()
  @IsNumber()
  @NumMaxLength(9, 0)
  stock: number;

  /**
   * El url del producto (debe ser una cadena de texto)
   * @example "http://www.samsung.com/zflip5.png"
   */
  @IsString()
  imgUrl: string;

  /**
   * La Categoria del producto
   * @example
   */
  @IsString()
  @IsUUID()
  category: Category;
}

export class UpdateProductDto {
  /**
   * El nombre del producto
   * @example "Samsung Galaxy Z Fold 5"
   */
  @IsOptional()
  @IsString()
  @MaxLength(50)
  name: string;

  /**
   * La description del producto
   * @example "The best foldable in the world"
   */
  @IsOptional()
  @IsString()
  description: string;

  /**
   * El precio del producto (debe contener maximo 8 digitos y 2 decimales, separados por un . )
   * @example "1919.99"
   */
  @IsOptional()
  @IsNumber()
  @NumMaxLength(8, 2)
  price: number;

  /**
   * El stock del producto (debe ser un numero entero -sin decimales-)
   * @example "100"
   */
  @IsOptional()
  @IsNumber()
  @NumMaxLength(9, 0)
  stock: number;

  /**
   * El url del producto (debe ser una cadena de texto)
   * @example "http://www.samsung.com/zfold5.png"
   */
  @IsOptional()
  imgUrl: string;

  /**
   * La Categoria del producto
   * @example
   */
  @IsOptional()
  @IsUUID()
  category: Category;
}
