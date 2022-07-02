import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('UsersController E2E Test', () => {
    let app: INestApplication;

    beforeAll(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile()
        
        app = moduleFixture.createNestApplication();
        app.useGlobalPipes(new ValidationPipe());
        await app.init();
    });

    it('should create a new user', () => {
        return request(app.getHttpServer())
        .post('/users/register')
        .send({
            firstName: "Omair",
            lastName: "Mangondaya",
            address: "Makati, City",
            postCode: "4217",
            contactNumber: "09303549784",
            email: "omair@gmail.com",
            username: "Omair123",
            password: "P@ssw0rd",
        })
        .expect(201);
    })

    it('should response 400 code on username or email already used or registered when signing up account.', () => {
        return request(app.getHttpServer())
        .post('/users/register')
        .send({
            firstName: "Omair",
            lastName: "Mangondaya",
            address: "Makati, City",
            postCode: "4217",
            contactNumber: "09303549784",
            email: "omair@gmail.com",
            username: "Omair123",
            password: "P@ssw0rd",
        })
        .expect(400);
    })

    it('should response 400 code when fields are not complete when signing up account.', () => {
        return request(app.getHttpServer())
        .post('/users/register')
        .send({
            firstName: "",
            lastName: "Mangondaya",
            address: "",
            postCode: "",
            contactNumber: "09303549784",
            email: "omair@gmail.com",
            username: "Omair123",
            password: "P@ssw0rd",
        })
        .expect(400);
    })

    it('should login a user', () => {
        return request(app.getHttpServer())
        .post('/auth/login')
        .send({
            username: "abs123",
            password: "P@ssw0rd",
        })
        .expect(201);
    })
})