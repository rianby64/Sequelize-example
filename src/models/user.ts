
import { Sequelize, DataTypes, Model, BuildOptions } from 'sequelize';

interface UserRow {
  id: number;
  firstName: number;
  lastName: string;
  email: string;
}

type User = typeof Model & {
  new (values?: object, options?: BuildOptions): UserRow;
  associate: () => void;
};

export function Users(sequelize: Sequelize): User {
  const user = <User>sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});

  user.associate = function() {
    // associations can be defined here
  };
  return user;
};