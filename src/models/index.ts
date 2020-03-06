
import { Sequelize } from 'sequelize';
import { Users } from './user';
import configs from '../config/config.json'; // believe me - this is a bad option!

const env = (process.env.NODE_ENV as 'development' | 'production' | 'test') || 'development';
const config = configs[env];

const sequelize = new Sequelize(config.database, config.username, config.password);

const users = Users(sequelize);

export const db = {
  sequelize,
  Sequelize,
  Users: users,
};

users.associate();
