import express from 'express';
import { Log } from '../models/index.js';
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { problemId, deviceTag, locationId, userId, note } = req.body;
    const log = await Log.create({ problemId, deviceTag, locationId, userId, note });
    res.status(201).json(log);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  const list = await Log.findAll({
    include: { all: true },
    order: [['createdAt','DESC']],
    limit: 1000
  });
  res.json(list);
});

router.get('/:id', async (req, res) => {
  const item = await Log.findByPk(req.params.id, { include: { all: true } });
  if (!item) return res.status(404).send({ error: 'Not found' });
  res.json(item);
});

export default router;
