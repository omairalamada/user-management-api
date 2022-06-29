import { LoginUserDto } from './dtos/login-user.dto';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../users/entities/user.entity';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, LoginUserDto])],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
