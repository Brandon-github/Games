import { Router } from "express";
import { getAll, getById } from '../controllers/gameType';

const router = Router();

router.get('/', getAll);
router.get('/:id', getById);

export { router };