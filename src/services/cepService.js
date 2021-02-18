const apiService = require('../services/apiService');
const cepModel = require('../models/cepModel');

const isValid = (cep) => cep && cep.match(/^\d{5}-?\d{3}$/);

const lookup = async (cep) => {
  if (!isValid(cep)) return { err: { message: 'CEP inválido', code: 400 }};

  const cepData = await cepModel.findCEP(cep);

  if (cepData) return cepData;

  const cepFound = await apiService.findCEP(cep);

  if (cepFound.length === 0) return { err: { message: 'CEP não encontrado', code: 404 }};

  await cepModel.saveCEP(cepFound);

  return cepFound;
};

module.exports = { lookup };