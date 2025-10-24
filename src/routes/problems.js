import express from 'express';
import { Problem } from '../models/index.js';
const router = express.Router();

router.get('/', async (req, res) => {
  const list = await Problem.findAll();
  res.json(list);
});

router.post('/', async (req, res) => {
  const { name } = req.body;
  const p = await Problem.create({ name });
  res.status(201).json(p);
});

export default router;
