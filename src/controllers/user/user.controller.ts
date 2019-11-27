import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
  Query,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { UserService } from '../../services/user.service';
import {
  userValidation,
  optionalUserValidation,
} from '../../validators/user.validator';
import { CreateUserDto } from '../../dto';
import { MsgErrorsHelpers } from '../../helpers/msg.errors.helpers';

@Controller('users')
export class UserController {
  constructor(public service: UserService) {}
  @Post()
  public async createUser(@Body() createUserDto: CreateUserDto) {
    try {
      const validation = await userValidation.validate(createUserDto);
      if (!validation.error) {
        return this.service.create(createUserDto);
      } else {
        throw new Error(
          MsgErrorsHelpers.concatValidationsMsg(validation.error)
        );
      }
    } catch (err) {
      throw new HttpException(err.toString(), HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  async findAll(@Query() query) {
    try {
      const validation = await optionalUserValidation.validate(query);
      if (!validation.error) {
        return this.service.findAll(query);
      } else {
        throw new Error(
          MsgErrorsHelpers.concatValidationsMsg(validation.error)
        );
      }
    } catch (err) {
      throw new HttpException(err.toString(), HttpStatus.BAD_REQUEST);
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    if (id && typeof id === 'string') {
      return this.service.findOne(id);
    } else {
      throw new HttpException('Id is not valid', HttpStatus.BAD_REQUEST);
    }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() createUserDto: CreateUserDto) {
    try {
      const validation = await userValidation.validate(createUserDto);
      if (!validation.error) {
        return this.service.findIdAndUpdate(id, createUserDto);
      } else {
        throw new Error(
          MsgErrorsHelpers.concatValidationsMsg(validation.error)
        );
      }
    } catch (err) {
      throw new HttpException(err.toString(), HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    if (id && typeof id === 'string') {
      return this.service.delete(id);
    } else {
      throw new HttpException('Id is not valid', HttpStatus.BAD_REQUEST);
    }
  }
}
