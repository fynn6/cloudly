import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from '../user/user.service.js';

@Controller('auth')
export class AuthController {
  constructor(
    private userService: UserService
  ) {}

  @Post('login')
  async login(@Body() body) {
    const user = await this.userService.findUserByEmail(body.email);
    return user;
  }
}
