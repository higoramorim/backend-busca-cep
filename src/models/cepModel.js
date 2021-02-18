const connection = require('./connection');

const findCEP = async (cep) => {
  const db = await connection();

  const results = await db.collection('ceps').findOne({cep});
  if(!results) return null;

  return results;
};

const saveCEP = async (cepData) => {
  const { uf, cidade, bairro, logradouro, cep } = cepData;

  const db = await connection();
  const result = await db
  .collection('ceps')
  .insertOne({ uf, cidade, bairro, logradouro, cep });

  return result;
};

module.exports = {
  findCEP,
  saveCEP,
}