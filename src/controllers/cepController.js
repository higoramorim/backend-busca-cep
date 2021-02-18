const CEP = require('../services/cepService');

const lookupCEP = async (req, res) => {
  try {
    const cep = await CEP.lookup(req.query.cep);

    if(cep.err) return res.status(cep.err.code).json({ message: cep.err.message });

    return res.status(200).json({cep});
  } catch (err) {
    res.status(500).json({message: err.message});
  }
};

module.exports = { lookupCEP };