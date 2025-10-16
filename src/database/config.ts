import { Droplet } from "src/object/object.entity.js"
import { User } from "src/user/user.entity.js";
import { DataSourceOptions } from "typeorm";

export const DB_CONFIG: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3307,
  username: 'cloudly',
  password: 'cloudly',
  database: 'cloudly',
  entities: [Droplet, User],
  migrations: ['src/database/migrations/*.ts'],
  synchronize: false,
}

export default DB_CONFIG;