import { Controller, Get } from '@nestjs/common';
import { ObjectService } from './object.service.js';

@Controller('objects')
export class ObjectController {
  constructor(private objectService: ObjectService) {}

  @Get()
  getAll() {
    return this.objectService.findAll();
  }
}
