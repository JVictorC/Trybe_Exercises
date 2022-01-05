import express from 'express';
import ProductInterface from '../Interfaces/ProductInterface';
import {
  addService,
  excludeService,
  getAllService,
  getByIdService,
  updateService,
} from '../Services/ProductsServices';

const routerProduct = express.Router();

routerProduct.get('/list-products', async (req, res, next) => {
  try {
    const products = await getAllService();
    res.status(200).json(products);
  } catch (error: any) {
    console.log(error.message);
    next(error);
  }
});

routerProduct.get('/get-by-id/:id', async (req, res, next) => {
  try {
    const product = await getByIdService(req.params.id);

    res.status(200).json(product);
  } catch (error: any) {
    console.log(error.message);
    next(error);
  }
});

routerProduct.post('/add-product', async (req, res, next) => {
  try {
    const { name, brand } = req.body;
    console.log('post');

    const newProduct = await addService(name, brand);

    res.status(201).json(newProduct);
  } catch (error: any) {
    console.log(error.message);
    next(error);
  }
});

routerProduct.delete('/delete-user/:id', async (req, res, next) => {
  try {
    const products = await excludeService(req.params.id);
    res.status(200).json(products);
  } catch (error: any) {
    console.log(error.message);
    next(error);
  }
});

routerProduct.put('/update-user/:id', async (req, res, next) => {
  try {
    const { name, brand } = req.body;

    const products = await updateService(req.params.id, name, brand);

    res.send(products);
  } catch (error: any) {
    console.log(error.message);
    next(error);
  }
});

export default routerProduct;
