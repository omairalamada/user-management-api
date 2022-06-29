import { AuthService } from './auth.service';
import { Body, Controller, Post } from '@nestjs/common';
import { LoginUserDto } from './dtos/login-user.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('/sigin')
    async signIn(@Body() loginDto: LoginUserDto): Promise<string> {
        return this.authService.signIn(loginDto);
    } 
}
