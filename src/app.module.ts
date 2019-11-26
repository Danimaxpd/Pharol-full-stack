import * as dotenv from 'dotenv';
import { Module } from '@nestjs/common';

import { AppService } from './services/app.service';
import { AppController } from './controllers/app.controller';
import { UserModule } from './modules/user.module';
import { UserService } from './services/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
dotenv.config();

const mdPort = parseInt(process.env.MONGO_PORT.toString(), 0);
const mdDB = process.env.MONGO_DB;
const mdUser = process.env.MONGO_USER;
const mdPass = process.env.MONGO_PASSWORD;
const mdHost = process.env.MONGO_HOST;

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mongodb',
    host: mdHost,
    port: mdPort,
    username: mdUser,
    password: mdPass,
    database: mdDB,
    logging: true,
    synchronize: true,
    migrationsRun: true,
    entities: ['src/entities/**/*.ts'],
    migrations: ['src/migrations/**/*.ts'],
    cli: {
      migrationsDir: 'src/migrations/**/*.ts',
    },
  }), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
