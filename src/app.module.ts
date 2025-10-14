import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ObjectModule } from './object/object.module';
import { Droplet } from './object/object.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'cloudly',
      password: 'cloudly',
      database: 'cloudly',
      entities: [Droplet],
      migrations: ['database/migrations/*.ts'],
      synchronize: false,
    }),
    ObjectModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
