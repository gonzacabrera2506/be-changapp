import { AfterInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'account'})
export class Register {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length:30})
    nombre: string;

    @Column({length: 30})
    apellido: string;

    @Column({length: 30})
    nombre_fantasia?: string;

    @Column()
    telefono: string;

    @AfterInsert()
    async todoMayusculas() {
        this.nombre = this.nombre.toUpperCase();
        this.apellido = this.apellido.toUpperCase();
        if (this.nombre_fantasia) {
            this.nombre_fantasia = this.nombre_fantasia.toUpperCase();
        }
    }


}
