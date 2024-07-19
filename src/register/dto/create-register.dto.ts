import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateRegisterDto {

    @IsString()
    @MinLength(3)
    @MaxLength(30)
    @IsNotEmpty()
    nombre: string;

    @IsString()
    @MinLength(3)
    @MaxLength(30)
    @IsNotEmpty()
    apellido: string;
    
    @IsString()
    @MinLength(3)
    @MaxLength(30)
    nombre_fantasia?: string;

    @IsString()
    @IsNotEmpty()
    telefono: string;

}
