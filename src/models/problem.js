export default (sequelize, DataTypes) =>
  sequelize.define('Problem', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
  }, { tableName: 'problems', timestamps: false });
