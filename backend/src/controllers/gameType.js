import { Request, Response } from 'express';
import handleError from '../utils/handleError';
import {
  selectAllItems,
  selectItemById,
  insertItem,
  updateItem,
  deleteItem
} from "../models/gameType";

/**
 * 
 * @param { Request} req 
 * @param { Response } res 
 */
export const getAll = async (req, res) => {
  try {
    const gameTypes = await selectAllItems();

    res.status(200).json(gameTypes);
  } catch (err) {
    handleError(res, err, "ERROR_GETTING_ALL_GAME_TYPES")
  }
}

/**
 * 
 * @param { Request} req 
 * @param { Response } res 
 */
export const getById = async (req, res) => {
  try {
    const { id } = req.params;

    const gameType = await selectItemById(id);

    res.status(200).json(gameType);
  } catch(e) {
    handleError(res, e, "ERROR_GETTING_GAME_TYPES");
  }
}

/**
 * 
 * @param { Request} req 
 * @param { Response } res 
 */
export const create = async (req, res) => {
  try {
    const { name } = req.body;
    const newGameType = {
      name
    };

    await insertItem(newGameType);
  } catch (err) {
    handleError(res, err, "ERROR_CREATING_GAME_TYPE");
  }
}

/**
 * 
 * @param { Request} req 
 * @param { Response } res 
 */
export const update = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;

    const newGameType = {
      name
    };

    await updateItem(id, newGameType);
  } catch (err) {
    handleError(res, err, "ERROR_UPDATING_GAME_TYPE");
  }
}

/**
 * 
 * @param { Request} req 
 * @param { Response } res 
 */
export const remove = async (req, res) => {
  try {
    const { id } = req.params;

    await deleteItem(id);
  } catch (err) {
    handleError(res, err, "ERROR_DELETING_GAME_TYPE");
  }
}

