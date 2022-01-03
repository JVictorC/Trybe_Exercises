const { ObjectId } = require("mongodb");
const connection = require("./ConnectionMongo")

const convertObject = (value) => {
  return {
    id: value["_id"],
    firstName: value["firstName"],
		lastName: value["lastName"],
		email: value["email"],
		password: value["password"],
  }
}

const findAll = async () => {
  try {
    const conn = await connection();
    const query = await conn.collection('users').find().toArray();
    return query.map(convertObject)
  } catch (error) {
    console.log('Erro interno', error.message);
  }
}

const findById = async (IdUser) => {
  try {
    console.log(IdUser);
    const conn = await connection();
    const query = await conn.collection('users').find({"_id" : ObjectId(IdUser)}).toArray();
    return query;
  } catch (error) {
    console.log('Erro interno', error.message);
  }
}

const insertNewUser = async (newUser) => {
  try {
    const conn = await connection();
    const {insertedId: id} = await conn.collection('users').insertOne({
      ...newUser
    });
    return {id, ...newUser};
  } catch (error) {
    console.log('Erro interno', error.message);
  }
}

const updateUser = async (idUser, newBody) => {
  try {
    const conn = await connection();
    const query = await conn.collection('users').updateOne({
      "_id" : ObjectId(idUser),
    }, {
      $set: {...newBody}
    });
    return {id: idUser, ...newBody};
  } catch (error) {
    console.log('Erro interno', error.message);
  }
}


module.exports = {
  findAll,
  insertNewUser,
  findById,
  updateUser
}