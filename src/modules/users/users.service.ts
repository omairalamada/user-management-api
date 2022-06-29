import { UserEntity } from './entities/user.entity';
import { UserDto } from './dtos/user.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService { 
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepo: Repository<UserEntity>,
    ) {}

    async createUser(user: UserDto): Promise<UserEntity> {
        const newUser = this.userRepo.create({
            ...user,
        })

        const saved: UserEntity = await this.userRepo.save(newUser);

        return saved;
    }

}
