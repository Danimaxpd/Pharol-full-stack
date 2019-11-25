import { Controller, Get } from '@nestjs/common';
import { AppService } from '../services/app.service';
import { User } from '../entities/User';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('all')
  getAllUsers(): Promise<User[]> {
    return this.appService.findAll();
  }
}
