export default (sequelize, DataTypes) => {
  const Log = sequelize.define('Log', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    problemId: { type: DataTypes.INTEGER, allowNull: false },
    deviceTag: { type: DataTypes.STRING, allowNull: false },
    locationId: { type: DataTypes.INTEGER, allowNull: false },
    userId: { type: DataTypes.INTEGER, allowNull: false },
    note: { type: DataTypes.TEXT, allowNull: true },
    status: { type: DataTypes.STRING, allowNull: false, defaultValue: 'open' },
  }, { tableName: 'logs', timestamps: true });

  return Log;
};
