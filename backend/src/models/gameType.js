import pool from '../config/database';
import { queryBuilder } from 'mysql-query-placeholders';

export const selectAllItems = async () => {
  const query = `SELECT name FROM game_type`;

  const [gameTypes] = await pool.query(query);

  return gameTypes;
}

export const selectItemById = async (id) => {
  const query = `SELECT name FROM game_type WHERE id = :id`;
  const queryData = queryBuilder(query, {id});

  const [gameType] = await pool.query(queryData);

  return gameType;
}

export const insertItem = async (gameType) => {
  const query = `INSERT INTO game_type (name) VALUES(:name)`;
  const queryData = queryBuilder(query, gameType);

  await pool.query(queryData);
} 

export const updateItem = async (id, gameType) => {
  const query = `UPDATE game_type SET name = :name WHERE id = :id`;
  const queryData = queryBuilder(query, {...gameType, id});

  await pool.query(queryData);
}

export const deleteItem = async (id) => {
  const query = `DELETE FROM game_type WHERE id = :id`;
  const queryData = queryBuilder(query, {id});

  await pool.query(queryData);
}
