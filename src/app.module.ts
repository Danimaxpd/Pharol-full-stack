import { Module } from '@nestjs/common';

import { AppService } from './services/app.service';
import { DatabaseModule } from '../database.module';
import { userProviders } from './providers/user.providers';
import { AppController } from './controllers/app.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
  providers: [...userProviders, AppService],
})
export class AppModule {}
