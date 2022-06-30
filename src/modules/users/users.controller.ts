import { ResponseDto } from './../../common/dto/response.dto';
import { UserEntity } from './entities/user.entity';
import { UsersService } from './users.service';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserDto } from './dtos/user.dto';
import { EditUserDocDecorator, GetAllUsersDoc, RegisterUserDocDecorator } from './swagger/user-doc.decorator';

@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Post('/register')
    @RegisterUserDocDecorator()
    async createUser(@Body() userDto: UserDto): Promise<ResponseDto<UserEntity>> {
        const response = await this.userService.createUser(userDto);

        return { data: response }
    }   

    @ApiOperation({ summary: 'Delete user by id', operationId: 'DeleteUser' })
    @ApiResponse({ status: 200, type: UserDto })
    @Delete(':id')
    async deleteUser(@Param('id') id: number) {
        return await this.userService.deleteUser(id);
    }

    @Get('GetAllUsers')
    @GetAllUsersDoc()
    async getAllUsers(): Promise<ResponseDto<UserEntity[]>> {
        const response = await this.userService.getAllUsers();

        return { data: response }
    }

    @Patch('edit/:id')
    @EditUserDocDecorator()
    async editUser(@Param('id') id: number, @Body() userDto: UserDto): Promise<ResponseDto<UserEntity>> {
        const response = await this.userService.editUser(id, userDto);

        return { data: response };
    }
}
