import { IsNotEmpty, IsString, Max, Min } from "class-validator";

export class CreateAuthDto {

    @IsString()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    @Min(6)
    @Max(15)
    password: string;


}
