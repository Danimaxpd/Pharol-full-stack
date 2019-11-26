import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database.module';

import { AppService } from './services/app.service';
import { AppController } from './controllers/app.controller';
import { UserModule } from './modules/user.module';
import { UserController } from './controllers/user/user.controller';

@Module({
  imports: [DatabaseModule, UserModule],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
