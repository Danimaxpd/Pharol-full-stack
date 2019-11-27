
import { Injectable, Inject } from '@nestjs/common';

import { Model } from 'mongoose';
import { User } from '../interfaces/user.interface';
import { CreateUserDto } from '../dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdCat = new this.userModel(createUserDto);
    return await createdCat.save();
  }

  async findAll(query?: object): Promise<User[]> {
     return await this.userModel.find(query).exec();
  }

  async findOne(id: string): Promise<User> {
    return await this.userModel.findById(id).exec();
  }

  async findIdAndUpdate(id: string, data: object): Promise<User> {
    return await this.userModel.findByIdAndUpdate(id, data);
  }

  async delete(id: string): Promise<User> {
    return await this.userModel.findByIdAndDelete(id);
  }
}