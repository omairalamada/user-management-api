import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, Matches, MaxLength, MinLength } from 'class-validator'


export class UserDto {
    @IsOptional()
    id?: number

    @IsNotEmpty()
    firstName: string;

    @IsNotEmpty()
    lastName: string;

    @IsNotEmpty()
    address: string;

    @IsNumber()
    postCode: number;

    @IsNotEmpty()
    contactNumber: string;

    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    username: string;

    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(32)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'password is too weak',
    })
    password: string;
}
