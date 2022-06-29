import { Expose } from 'class-transformer'
import { IsNotEmpty, IsNumber } from 'class-validator'


export class UserDto {
    @IsNotEmpty()
    firstName: string

    @Expose()
    lastName: string

    @Expose()
    address: string

    @IsNumber()
    postCode: number

    @IsNumber()
    contactNumber: number

    @Expose()
    email: string

    @Expose()
    username: string

    @Expose()
    password: string
}
