import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator'


export class UserDto {
    @ApiProperty({ example: 'Omair'})
    @IsNotEmpty()
    firstName?: string

    @ApiProperty({ example: 'Mangondaya'})
    @IsNotEmpty()
    lastName?: string

    @ApiProperty({ example: 'Lipa City, Batangas'})
    @IsNotEmpty()
    address?: string

    @ApiProperty({ example: '4217'})
    @IsNumber()
    postCode?: number

    @ApiProperty({ example: '09303549784'})
    @IsNotEmpty()
    contactNumber?: string

    @ApiProperty({ example: 'omairmangondaya@gmail.com'})
    @IsNotEmpty()
    @IsEmail()
    email?: string

    @ApiProperty({ example: 'omair123'})
    @IsNotEmpty()
    username?: string

    @ApiProperty({ example: 'password'})
    @IsNotEmpty()
    password: string
}
