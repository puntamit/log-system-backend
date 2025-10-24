import { sequelize, Problem, User, Location } from './models/index.js';

async function seed(){
  await sequelize.sync({ alter: true });
  await Problem.bulkCreate([
    { name: 'เครื่องไม่ติด' },
    { name: 'พิมพ์ไม่ได้' },
    { name: 'เน็ตช้า' },
    { name: 'หน้าจอดับ' }
  ], { ignoreDuplicates: true });

  await User.bulkCreate([
    { username: 'jane', displayName: 'Jane Doe' },
    { username: 'pete', displayName: 'Pete' }
  ], { ignoreDuplicates: true });

  await Location.bulkCreate([
    { label: 'อาคาร A - แผนก X - ชั้น 1', building:'A', department:'X', floor:'1' },
    { label: 'อาคาร B - แผนก Y - ชั้น 3', building:'B', department:'Y', floor:'3' }
  ], { ignoreDuplicates: true });

  console.log('seed done');
  process.exit(0);
}

seed();
