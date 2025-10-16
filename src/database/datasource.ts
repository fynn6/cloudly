import { DataSource } from 'typeorm';
import DB_CONFIG from './config.js';

const MysqlDataSource = new DataSource(DB_CONFIG);

export default MysqlDataSource;
