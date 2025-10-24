import express from 'express';
import { Location } from '../models/index.js';
const router = express.Router();

router.get('/', async (req, res) => {
  const list = await Location.findAll();
  res.json(list);
});

router.post('/', async (req, res) => {
  const { building, department, floor, label } = req.body;
  const l = await Location.create({ building, department, floor, label });
  res.status(201).json(l);
});

export default router;
