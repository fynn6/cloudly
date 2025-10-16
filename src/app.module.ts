import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ObjectModule } from './object/object.module.js';
import { Droplet } from './object/object.entity.js';
import { AuthModule } from './auth/auth.module.js';
import { UserModule } from './user/user.module.js';
import * as AdminJSTypeorm from '@adminjs/typeorm'
import AdminJS from 'adminjs'
import { User } from './user/user.entity.js';
import { AdminModule } from '@adminjs/nestjs';


AdminJS.registerAdapter({
  Resource: AdminJSTypeorm.Resource,
  Database: AdminJSTypeorm.Database,
})

const DEFAULT_ADMIN = {
  email: 'admin@example.com',
  password: 'password',
}

const authenticate = async (email: string, password: string) => {
  if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
    return Promise.resolve(DEFAULT_ADMIN)
  }
  return null
}

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'cloudly',
      password: 'cloudly',
      database: 'cloudly',
      entities: [Droplet, User],
      migrations: ['database/migrations/*.ts'],
      synchronize: false,
    }),
    UserModule,
    AuthModule,
    ObjectModule,
    AdminModule.createAdminAsync({
      useFactory: () => ({
        adminJsOptions: {
          rootPath: '/admin',
          resources: [
            User
          ],
        },
        auth: {
          authenticate,
          cookieName: 'adminjs',
          cookiePassword: 'secret'
        },
        sessionOptions: {
          resave: true,
          saveUninitialized: true,
          secret: 'secret'
        },
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
