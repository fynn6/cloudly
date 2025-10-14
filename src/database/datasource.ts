import { DataSource } from 'typeorm';
import { Droplet } from 'app/object/object.entity';

const MysqlDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3307,
  username: 'cloudly',
  password: 'cloudly',
  database: 'cloudly',
  entities: [Droplet],
  migrations: ['src/database/migrations/*.ts'],
  synchronize: false,
});

export default MysqlDataSource;
