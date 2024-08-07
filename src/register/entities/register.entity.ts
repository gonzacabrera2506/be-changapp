import { AfterInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity({name: 'account'})
export class Register {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column({length:30})
    nombre: string;

    @ApiProperty()
    @Column({length: 30})
    apellido: string;

    @ApiProperty()
    @Column({length: 30})
    nombre_fantasia: string;

    @ApiProperty()
    @Column()
    telefono: string;

    @ApiProperty()
    @Column()
    email: string;
    
    @ApiProperty()
    @Column()
    password: string;

    @AfterInsert()
    async todoMayusculas() {
        this.nombre = this.nombre.toUpperCase();
        this.apellido = this.apellido.toUpperCase();
        this.email = this.email.toLowerCase();
        if (this.nombre_fantasia) {
            this.nombre_fantasia = this.nombre_fantasia.toUpperCase();
        }
    }


}
