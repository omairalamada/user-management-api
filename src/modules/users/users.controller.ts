import { ResponseDto } from './../../common/dto/response.dto';
import { UserEntity } from './entities/user.entity';
import { UsersService } from './users.service';
import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserDto } from './dtos/user.dto';
import { RegisterDocDecorator } from './register-doc.decorator';

@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Post('/register')
    @RegisterDocDecorator()
    async createUser(@Body() userDto: UserDto): Promise<ResponseDto<UserEntity>> {
        const response = await this.userService.createUser(userDto);

        return { data: response }
    }   

    @Delete(':id')
    async deleteUser(@Param('id') id: number) {
        const response = await this.userService.deleteUser(id);

        return 'Successfully deleted!';
    }
}
