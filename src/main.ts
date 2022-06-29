import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const config = new DocumentBuilder()
    .setTitle('User Management API')
    .setDescription('User Managememt API')
    .setVersion('1.0')
    .addTag('User Management')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'Token',
      },
      'access-token',
    )
    .build()
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/documentation', app, document);

  await app.listen(process.env.PORT || 3000, () => {

    console.info(`Server details:
    Port:${process.env.PORT || 3000}`)
    
  });
}
bootstrap();
