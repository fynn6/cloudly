import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity.js';
import { Repository } from 'typeorm';
import { RegisterDto } from 'src/auth/dto/register.dto.js';
import bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {
    
  }

  findUserByEmail(email: string) {
    return this.userRepository.findOneBy({ email: email })
  }

  async createUser(data: RegisterDto) {
    const user = new User();
    user.email = data.email;
    user.password = await bcrypt.hash(data.password, 10);
    return this.userRepository.save(user);
  }
}
