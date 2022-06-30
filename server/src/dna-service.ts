
import sql from 'sql-template-strings';
import { db } from './db';

export const getAll = async () => (await db.query(sql`SELECT * FROM dna;`)).rows;

export const create = async (dna: string) => (await db.query(sql`INSERT INTO dna (dna) VALUES (${ dna.toUpperCase() }) RETURNING *;`)).rows[0]