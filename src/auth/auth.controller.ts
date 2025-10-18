import { Body, Controller, Post, Get, Request, UseGuards } from '@nestjs/common';
import { LoginDto } from './dto/login.do.js';
import { AuthService } from './auth.service.js';
import { RegisterDto } from './dto/register.dto.js';
import { JwtAuthGuard } from './jwt-auth.guard.js';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService
  ) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    const user = await this.authService.login(loginDto);
    return user;
  }

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    const user = await this.authService.register(registerDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('@me')
  async getMe(@Request() req: any) {
    return req.user;
  }
}
