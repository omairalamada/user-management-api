import { Exclude } from "class-transformer";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: string

    @Column({ name: 'first_name', type: "varchar" })
    firstName: string

    @Column({ name: 'last_name', type: "varchar" })
    lastName: string

    @Column({ name: 'address'})
    address: string

    @Column({ name: 'post_code', type: 'integer'})
    postCode: number

    @Column({ name: 'contact_number', type: 'integer'})
    contactNumber: number
    
    @Column({unique: true, name: 'email_address'})
    email: string

    @Column({})
    username: string

    @Exclude()
    @Column({ nullable: true })
    password?: string
}