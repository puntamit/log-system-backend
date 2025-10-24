import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import { sequelize } from './models/index.js';
import logsRouter from './routes/logs.js';
import problemsRouter from './routes/problems.js';
import usersRouter from './routes/users.js';
import exportRouter from './routes/export.js';
import locationsRouter from './routes/locations.js';

const app = express();
app.use(cors({ origin: process.env.FRONTEND_ORIGIN || '*' }));
app.use(express.json());

app.use('/api/logs', logsRouter);
app.use('/api/problems', problemsRouter);
app.use('/api/users', usersRouter);
app.use('/api/locations', locationsRouter);
app.use('/api/export', exportRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, async () => {
  console.log(`Server listening on ${PORT}`);
  try {
    await sequelize.authenticate();
    console.log('DB connected');
  } catch (e) {
    console.error('DB connect error', e.message);
  }
});
