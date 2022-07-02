import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import * as bcryptUtils from 'bcrypt'


describe('UsersService', () => {
  
  let userService: UsersService;
  let userRepository: Repository<UserEntity>;

  const USER_REPOSITORY_TOKEN = getRepositoryToken(UserEntity);

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: USER_REPOSITORY_TOKEN,
          useValue: {
            create: jest.fn(),
            save: jest.fn(),
            findOne: jest.fn(),
          }
        },
      ],
    }).compile();

    userService = module.get<UsersService>(UsersService);
    userRepository = module.get<Repository<UserEntity>>(USER_REPOSITORY_TOKEN);
  });

  it('should be defined', () => {
    expect(userService).toBeDefined();
  });

  it('userRepository should be defined', () => {
    expect(userRepository).toBeDefined();
  })

  describe('createUser', () => {
    it('should create a new user with userame and passowrd', async () => {
      await userService.createUser({
        firstName: "Omair",
        lastName: "Mangondaya",
        address: "Makati, City",
        postCode: 4217,
        contactNumber: "09303549784",
        email: "omair@gmail.com",
        username: "Omair123",
        password: "P@ssw0rd",
      })
    });

    it('should call userRepository.create with correct params', async () => {
      await userService.createUser({
        firstName: "Omair",
        lastName: "Mangondaya",
        address: "Makati, City",
        postCode: 4217,
        contactNumber: "09303549784",
        email: "omair@gmail.com",
        username: "Omair123",
        password: "P@ssw0rd",
      });
      expect(userRepository.create).toHaveBeenCalledWith({
        firstName: 'Omair',
        lastName: "Mangondaya",
        address: "Makati, City",
        postCode: 4217,
        contactNumber: "09303549784",
        email: "omair@gmail.com",
        username: "Omair123",
        password: "P@ssw0rd",
      })
    })
  })

  // describe('Create a User', () => {
  //   it('throws an error when no title is provided', async () => {
  //     const createUserDto = {
  //       firstName: "",
  //       lastName: "",
  //       address: "",
  //       postCode: 4217,
  //       contactNumber: "09303549784",
  //       email: "omair@gmail.com",
  //       username: "Omair123",
  //       password: "P@ssw0rd",
  //     };

  //     const result = await userService.createUser(createUserDto);
  //     expect(userService.createUser).toHaveBeenCalledWith(
  //       createUserDto,
  //     );
  //     expect(result).toEqual('someUser');
  //   })
  // })

});
