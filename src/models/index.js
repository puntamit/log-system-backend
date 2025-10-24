import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

import defineUser from './user.js';
import defineProblem from './problem.js';
import defineLocation from './location.js';
import defineLog from './log.js';

const User = defineUser(sequelize, Sequelize.DataTypes);
const Problem = defineProblem(sequelize, Sequelize.DataTypes);
const Location = defineLocation(sequelize, Sequelize.DataTypes);
const Log = defineLog(sequelize, Sequelize.DataTypes);

User.hasMany(Log, { foreignKey: 'userId' });
Problem.hasMany(Log, { foreignKey: 'problemId' });
Location.hasMany(Log, { foreignKey: 'locationId' });

Log.belongsTo(User, { foreignKey: 'userId' });
Log.belongsTo(Problem, { foreignKey: 'problemId' });
Log.belongsTo(Location, { foreignKey: 'locationId' });

export { sequelize, User, Problem, Location, Log };
