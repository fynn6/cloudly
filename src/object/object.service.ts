import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Droplet } from './object.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ObjectService {
  constructor(
    @InjectRepository(Droplet)
    private dropletRepository: Repository<Droplet>,
  ) {}

  findAll(): Promise<Droplet[]> {
    return this.dropletRepository.find();
  }
}
