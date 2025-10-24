import express from 'express';
import ExcelJS from 'exceljs';
import { Log } from '../models/index.js';
const router = express.Router();

router.get('/', async (req, res) => {
  const logs = await Log.findAll({ include: { all: true } });

  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet('Logs');
  sheet.columns = [
    { header: 'วันที่', key: 'createdAt', width: 20 },
    { header: 'ปัญหาที่พบ', key: 'problem', width: 30 },
    { header: 'Tag (อุปกรณ์)', key: 'tag', width: 20 },
    { header: 'สถานที่', key: 'location', width: 30 },
    { header: 'ผู้แจ้ง', key: 'user', width: 20 },
    { header: 'หมายเหตุ', key: 'note', width: 40 },
  ];

  logs.forEach(l => {
    const problem = l.Problem?.name || '';
    const location = l.Location?.label || '';
    const user = l.User?.displayName || l.User?.username || '';
    sheet.addRow({
      createdAt: new Date(l.createdAt).toLocaleString('th-TH'),
      problem,
      tag: l.deviceTag,
      location,
      user,
      note: l.note || ''
    });
  });

  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
  res.setHeader('Content-Disposition', 'attachment; filename="logs.xlsx"');
  await workbook.xlsx.write(res);
  res.end();
});

export default router;
