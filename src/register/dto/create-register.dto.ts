import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateRegisterDto {

    @IsString()
    @MinLength(3)
    @MaxLength(30)
    @IsNotEmpty()
    nombre: String;

    @IsString()
    @MinLength(3)
    @MaxLength(30)
    @IsNotEmpty()
    apellido: String;
    
    @IsString()
    @MinLength(3)
    @MaxLength(30)
    nombre_fantasia?: String;

    @IsString()
    @IsNotEmpty()
    telefono: String;

}
