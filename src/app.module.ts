
import * as dotenv from 'dotenv';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppService } from './services/app.service';
import { AppController } from './controllers/app.controller';
import { UserModule } from './modules/user.module';

dotenv.config();

const mdPort = parseInt(process.env.MONGO_PORT.toString(), 0);
const mdDB = process.env.MONGO_DB;
const mdUser = process.env.MONGO_USER;
const mdPass = process.env.MONGO_PASSWORD;
const mdHost = process.env.MONGO_HOST;


@Module({
  imports: [MongooseModule.forRoot(`mongodb://${mdUser}:${mdPass}@${mdHost}:${mdPort}/${mdDB}`), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
