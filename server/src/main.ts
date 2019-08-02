import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use((req, res, next) => {
    res.header(
      'Access-Control-Allow-Origin',
      app.get('ConfigService').get('WEB_APP_URL'),
    );
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
    next();
  });
  app.useGlobalPipes(new ValidationPipe({ disableErrorMessages: true }));
  await app.listen(3000);
}
bootstrap();
