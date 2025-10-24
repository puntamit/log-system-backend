export default (sequelize, DataTypes) =>
  sequelize.define('Location', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    building: { type: DataTypes.STRING },
    department: { type: DataTypes.STRING },
    floor: { type: DataTypes.STRING },
    label: { type: DataTypes.STRING },
  }, { tableName: 'locations', timestamps: false });
