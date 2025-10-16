import { Module } from '@nestjs/common';
import { ObjectController } from './object.controller.js';
import { ObjectService } from './object.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Droplet } from './object.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Droplet])],
  controllers: [ObjectController],
  providers: [ObjectService],
  exports: [ObjectService],
})
export class ObjectModule {}
