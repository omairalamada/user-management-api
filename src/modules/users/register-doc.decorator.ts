import { applyDecorators } from '@nestjs/common'
import { ApiBody, ApiOkResponse, ApiOperation } from '@nestjs/swagger'

export function RegisterDocDecorator() {
    return applyDecorators(
        ApiOperation({ summary: 'Register user' }),
        ApiBody({
            schema: {
                example: {
                    firstName: "Omair",
                    lastName: "Mangondaya",
                    address: "Lipa City, Batangas",
                    postCode: 4217,
                    contactNumber: "09303549784",
                    email: "omair@gmail.com",
                    username: "Omair123",
                    password: "P@ssw0rd",
                },
            },
        }),
        ApiOkResponse({
            status: 201,
            description: 'Success',
            schema: {
                example: {
                    statusCode: 201,
                    message: 'Success',
                    data: {
                        firstName: "Omair",
                        lastName: "Mangondaya",
                        address: "Lipa City, Batangas",
                        postCode: 4217,
                        contactNumber: "09303549784",
                        email: "omair@gmail.com",
                        username: "Omair123"
                    },
                },
            },
        }),
    )
}

