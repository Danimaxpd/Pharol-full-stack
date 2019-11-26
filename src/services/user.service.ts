
import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { User } from '../entities/User';
import { DatabaseModule } from '../../database.module';

@Injectable()
export class UserService extends TypeOrmCrudService<User> {
  constructor(@Inject(DatabaseModule) connection, @InjectRepository(User) repo) {
    super(repo);
  }
}