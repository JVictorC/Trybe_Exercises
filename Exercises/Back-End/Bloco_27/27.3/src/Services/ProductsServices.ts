import Joi from 'joi';
import ProductInterface from '../Interfaces/ProductInterface';
import { add, exclude, getAll, getById, update } from '../Models/ProductModel';

const validatedBodyNameANdBrand = (name: String, brand: String) => {
  const schema = Joi.object({
    name: Joi.string()
        .max(30)
        .required(),
    brand: Joi.string()
    .max(30)
    .required(),
}).validate({name, brand});

return schema;
}


export const addService = async (name: String, brand: String) => {
  const validatedBody = validatedBodyNameANdBrand(name, brand);
  
  if(validatedBody.error) throw {status: 400, message: validatedBody.error?.message};

  const response = await add(name, brand);
  return response;
};

export const getAllService = async (): Promise<ProductInterface[]> => {
  const response = await getAll();
  return response;
};

export const getByIdService = async (id: String) => {
  const response = await getById(id);
  if(!response) throw { status: 404, message: 'User Not Found' }
  return response;
};

export const updateService = async (
  id: String,
  name: String,
  brand: String
) => {
  const validatedBody = validatedBodyNameANdBrand(name, brand);
  
  if(validatedBody.error) throw {status: 400, message: validatedBody.error?.message};

  const isInDataBase = await getById(id);

  if(!isInDataBase) throw { status: 404, message: 'User Not Found' }

  const response = await update(id, name, brand);
  return response;
};

export const excludeService = async (id: String) => {
  const response = await exclude(id);
  if(Object.keys(response).length === 0) throw {status: 404, message: 'User Not Found'};
  return response;
};
