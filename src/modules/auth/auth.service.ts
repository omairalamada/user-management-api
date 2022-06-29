import { UsersService } from './../users/users.service';
import { LoginUserDto } from './dtos/login-user.dto';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../users/entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userService: UsersService
    ) {}
    

    async signIn(loginUser: LoginUserDto): Promise<string> {
        const { username, password } = loginUser;

        const user = await this.userService.findOne({ where: { username }});

        if( user && (await bcrypt.compare(password, user.password))) {
            return 'success';
        } else {
            throw new UnauthorizedException('Please check your credential');
        }
    }
}
