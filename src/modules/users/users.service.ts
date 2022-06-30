import { ErrorMessages } from './../../common/error-messages.enum';
import { UserEntity } from './entities/user.entity';
import { UserDto } from './dtos/user.dto';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { UserNotFoundException } from 'src/exceptions/user-not-found.exception';

@Injectable()
export class UsersService { 
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepo: Repository<UserEntity>,
    ) {}

    findOne( findData: FindOneOptions<UserEntity>): Promise<Partial<UserEntity>> {
        return this.userRepo.findOne(findData)
    }

    async createUser(user: UserDto): Promise<UserEntity> {
        const { firstName, lastName, address, postCode, contactNumber, email, username, password } = user
        const found = await this.findOne({ where: { email }})

        // hash
        const salt = await bcrypt.genSalt();
        // generate hash password
        const hashedPassword = await bcrypt.hash(password, salt);

        if (found && found.email === email) {
            throw new BadRequestException(ErrorMessages.ALREADY_REGISTERED)
        }

        const newUser = this.userRepo.create({
            firstName,
            lastName,
            address,
            postCode,
            contactNumber,
            email,
            username,
            password: hashedPassword,
        })

        const saved: UserEntity = await this.userRepo.save(newUser);

        return saved;
    }

    async deleteUser(id: number): Promise<UserEntity> {
        const user = (await this.findOne({ where: { id },})) as UserEntity;

        if(!user) throw new UserNotFoundException();

        return this.userRepo.remove(user);    
    }
}
