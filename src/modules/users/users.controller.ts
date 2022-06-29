import { ResponseDto } from './../../common/dto/response.dto';
import { UserEntity } from './entities/user.entity';
import { UsersService } from './users.service';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserDto } from './dtos/user.dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @ApiBody({ type: UserDto })
    @ApiOperation({ summary: 'Add new user', operationId: 'AddUser' })
    @ApiResponse({ status: 200, type: UserDto })
    @Post('/create')
    async createUser(@Body() userDto: UserDto): Promise<ResponseDto<UserEntity>> {
        const response = await this.userService.createUser(userDto)

        return { data: response }
    }   
}
