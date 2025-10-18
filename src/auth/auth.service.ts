import { HttpException, Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service.js';
import { LoginDto } from './dto/login.do.js';
import { RegisterDto } from './dto/register.dto.js';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(data: LoginDto) {
    // validation already done by pipes or outside
    const email = data.email;
    const password = data.password;

    const user = await this.userService.findUserByEmail(email);
    if (user === null) {
      throw new HttpException({
        code: "USER_NOT_FOUND",
        message: "User with this email was not found",
      }, 404);
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new HttpException({
        code: "INVALID_PASSWORD",
        message: "The password provided was invalid",
      }, 401);
    }

    // create jwt token and return
    const accessToken = this.jwtService.sign({
      email: user.email,
      sub: user.id,
    })

    return { accessToken };
  }

  async register(data: RegisterDto) {
    const email = data.email;
    const password = data.password;

    const existingUser = await this.userService.findUserByEmail(email);
    if (existingUser) {
      throw new HttpException({
        code: "USER_ALREADY_EXISTS",
        message: "A user already exists with this email"
      }, 400);
    }

    return this.userService.createUser({ email, password });
  }
}
