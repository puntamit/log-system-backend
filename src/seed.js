import { sequelize, Problem, User, Location } from './models/index.js';

export default async function seed() {
  console.log('Seeding database...');
  await sequelize.sync({ alter: true });

  // ✅ ปัญหาที่พบ (เหลือเฉพาะ PACS เปิดไม่ได้)
  await Problem.bulkCreate([
    { name: 'PACS เปิดไม่ได้' },
  ], { ignoreDuplicates: true });

  // ✅ ผู้แจ้ง
  await User.bulkCreate([
    { username: 'puntamit.y', displayName: 'Puntamit.Y' },
    { username: 'pongston.p', displayName: 'Pongston.P' },
    { username: 'wisut.s', displayName: 'Wisut.S' },
    { username: 'teerapat.s', displayName: 'Teerapat.S' },
    { username: 'banpotana.p', displayName: 'Banpotana.P' },
  ], { ignoreDuplicates: true });

  // ✅ สถานที่ (เก็บของเดิมไว้ได้)
  await Location.bulkCreate([
    { label: 'อาคาร A - แผนก X - ชั้น 1', building: 'A', department: 'X', floor: '1' },
    { label: 'อาคาร B - แผนก Y - ชั้น 3', building: 'B', department: 'Y', floor: '3' },
    { label: 'อาคาร C - แผนกเวชระเบียน - ชั้น 2', building: 'C', department: 'เวชระเบียน', floor: '2' },
    { label: 'อาคาร D - แผนก PACS - ชั้น 1', building: 'D', department: 'PACS', floor: '1' },
  ], { ignoreDuplicates: true });

  console.log('✅ seed done');
}
