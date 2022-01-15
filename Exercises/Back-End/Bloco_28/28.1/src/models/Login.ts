import bodyRequest from "../interfaces/bodyLogin";
import connection from "./Connection"

export const createUser = async (newUser: bodyRequest) => {
  const conn = await connection();
  const {insertedId} = await conn.collection('users').insertOne({...newUser});
  return insertedId;
}


export const findUser = async (user: bodyRequest) => {
  const conn = await connection();
  const userInData = await conn.collection('users').findOne({
    username: user.username
  });
  return userInData;
} 