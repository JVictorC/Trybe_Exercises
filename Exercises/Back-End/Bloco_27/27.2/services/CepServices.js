const Joi = require("joi");
const { getInfoByCep, insetNewAddress } = require("../models/CepModels");


const validatedFullCep = (body) => {
  const { error } = Joi.object().keys({
    cep: Joi.string().regex(/\d{5}-\d{3}/).required(),
    logradouro: Joi.string().required(),
    bairro: Joi.string().required(),
    localidade: Joi.string().required(),
    uf: Joi.string().required().length(2),
  }).validate(body);

  return error;
}


const validatedCEP = (cep) => {
  var re = /^([\d]{2})\.*([\d]{3})-*([\d]{3})/;
  const validated = re.test(cep);

  return validated;
}


const createCep = async (bodyResponse) => {
  const hasError = validatedFullCep(bodyResponse);
  if(hasError) throw {code: 400, message: hasError.message};
  bodyResponse.cep = bodyResponse.cep.replace('-', '');
  const infoData = await getInfoByCep(bodyResponse.cep);
  if(infoData.length !== 0) throw { "code": 409, "message": "CEP já existente" };
  const result = await insetNewAddress(bodyResponse);
  return result;
}

const getDataByCep = async (cep) => {
  const isValid = validatedCEP(cep)
  if (!isValid) throw { "code": 400, "message": "CEP inválido" }
  const infos = await getInfoByCep(cep);
  if (infos.length < 1) throw { code: 404, message: "CEP não encontrado" }
  return infos;
}

module.exports = {
  getDataByCep,
  createCep,
}