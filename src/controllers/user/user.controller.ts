import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { User } from '../../entities/User';
import { UserService } from '../../services/user.service';

@Crud({
  model: {
    type: User,
  },
})
@Controller('users')
export class UserController {
  constructor(public userService: UserService) {}
}
