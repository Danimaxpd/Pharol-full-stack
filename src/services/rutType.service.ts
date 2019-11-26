
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { RutType } from '../entities/RutType';

@Injectable()
export class RutTypeService extends TypeOrmCrudService<RutType> {
  constructor(@InjectRepository(RutType) repo) {
    super(repo);
  }
}