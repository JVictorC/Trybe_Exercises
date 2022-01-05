import ProductInterface from '../Interfaces/ProductInterface';
import connection from './ConnectionSQL';

export const add = async (name: String, brand: String): Promise<ProductInterface> => {
  const [result] = await connection.query(
    `INSERT INTO products (name, brand) VALUES (?, ?);`,
    [name, brand]
  );

  return { id: result.insertId, name, brand };
};

export const getAll = async (): Promise<ProductInterface[]> => {
  const [rows] = await connection.query('SELECT * FROM products');
  return rows;
};

export const getById = async (id: String): Promise<ProductInterface | null> => {
  const [result] = await connection.query(
    'SELECT * FROM products WHERE id = ?',
    [id]
  );
  if (!result.length) return null;
  return result[0];
};

export const update = async (id: String, name: String, brand: String): Promise<ProductInterface[]> => {
  const [result] = await connection.query(
    'UPDATE products SET name = ?, brand = ? WHERE id = ?',
    [name, brand, id]
  );
  return result;
};

export const exclude = async (id: String): Promise<ProductInterface | {}> => {
  const product = await getById(id);
  if (!product) return {};
  await connection.query('DELETE FROM products WHERE id = ?', [id]);
  return product;
};
