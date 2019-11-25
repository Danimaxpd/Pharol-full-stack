import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { User } from '../entities/User';
@Injectable()
export class AppService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }
}
