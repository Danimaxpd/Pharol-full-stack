import { Controller } from '@nestjs/common';
import { UserService } from '../../services/user.service';

@Controller('users')
export class UserController {
  constructor(public service: UserService) {}
}
