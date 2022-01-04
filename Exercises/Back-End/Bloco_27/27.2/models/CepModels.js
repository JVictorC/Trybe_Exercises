const connection = require("./ConnectionSQL");


const insetNewAddress = async (newAdrres) => {
  const query = `
    INSERT INTO ceps (cep, logradouro, bairro, localidade, uf)
    VALUES (?, ?, ?, ?, ?);
  `;

  const valueForInsert = [
    newAdrres.cep,
    newAdrres.logradouro,
    newAdrres.bairro,
    newAdrres.localidade,
    newAdrres.uf,
  ]

  const [result] = await connection.execute(query, valueForInsert);
  return result;
}

const getInfoByCep = async (cep) => {
  const query = 'SELECT * FROM ceps WHERE cep = ?';
  const [result] = await connection.execute(query, [cep]);
  return result;
};

module.exports = {
  getInfoByCep,
  insetNewAddress
}