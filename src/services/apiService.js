const fetch = require('node-fetch');

const CEP_LA_API = 'http://cep.la';

const headers = {
  Accept: 'application/json',
};

const findCEP = async (cep) => {
  const response = await fetch(`${CEP_LA_API}/${cep}`, { headers });
  const cepData = await response.json();
  return cepData;
};

module.exports = {
  findCEP,
};