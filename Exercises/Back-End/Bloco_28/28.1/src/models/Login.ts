import { bodyRequest, bodyRequestByUpdate } from '../interfaces/bodyLogin';
import connection from './Connection';

export const createUser = async (newUser: bodyRequest) => {
  const conn = await connection();
  const { insertedId } = await conn
    .collection('users')
    .insertOne({ ...newUser });
  return insertedId;
};

export const findUser = async (user: bodyRequest | bodyRequestByUpdate) => {
  const conn = await connection();
  const userInData = await conn.collection('users').findOne({
    username: user.username,
  });
  return userInData;
};

export const updateUserByName = async (newUser: bodyRequestByUpdate) => {
  const conn = await connection();
  await conn.collection('users').updateOne(
    {
      username: newUser.username,
    },
    {
      $set: { password: newUser.newPassword, username: newUser.newUsername },
    }
  );
};
