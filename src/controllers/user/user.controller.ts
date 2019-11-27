import { Controller, Post, Req, Body, Get, Put, Delete, Param, Query } from '@nestjs/common';
import { UserService } from '../../services/user.service';
import { CreateUserDto, ListAllEntities } from '../../dto';

@Controller('users')
export class UserController {
  constructor(public service: UserService) {}
  @Post()
  public createUser(@Body() createUserDto: CreateUserDto) {
    return this.service.create(createUserDto);
  }
  @Get()
  findAll(@Query() query) {
    return this.service.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() createUserDto: CreateUserDto) {
    return this.service.findIdAndUpdate(id, createUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.delete(id);
  }
}
