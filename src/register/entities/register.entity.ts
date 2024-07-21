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

    @Column()
    email: string;

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
