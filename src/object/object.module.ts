import { Module } from '@nestjs/common';
import { ObjectController } from './object.controller';
import { ObjectService } from './object.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Droplet } from './object.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Droplet])],
  controllers: [ObjectController],
  providers: [ObjectService],
  exports: [ObjectService],
})
export class ObjectModule {}
