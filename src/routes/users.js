import express from 'express';
import { User } from '../models/index.js';
const router = express.Router();

router.get('/', async (req, res) => {
  const list = await User.findAll();
  res.json(list);
});

router.post('/', async (req, res) => {
  const { username, displayName } = req.body;
  const u = await User.create({ username, displayName });
  res.status(201).json(u);
});

export default router;
