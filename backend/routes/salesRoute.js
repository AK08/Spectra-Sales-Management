import express from 'express';
import { Sale } from '../models/saleModel.js';

const router = express.Router();

// Route for Save a New Sale
router.post('/', async (request, response) => {
  try {
    // Check if all required fields are provided
    if (
      !request.body.customerName ||
      !request.body.phoneNumber ||
      !request.body.company ||
      !request.body.address ||
      !request.body.district ||
      !request.body.productModelNumber ||
      !request.body.soldPrice 
      
    ) {
      return response.status(400).send({
        message:
          'Send all required fields: customerName, phoneNumber, company, address, district, productModelNumber, soldPrice, salesDate',
      });
    }

    // Create a new sale
    const newSale = {
      customerName: request.body.customerName,
      phoneNumber: request.body.phoneNumber,
      company: request.body.company,
      address: request.body.address,
      district: request.body.district,
      productModelNumber: request.body.productModelNumber,
      soldPrice: request.body.soldPrice,
     
    };

    const sale = await Sale.create(newSale);

    return response.status(201).send(sale);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get All Sales from the Database
router.get('/', async (request, response) => {
  try {
    const sales = await Sale.find({});

    return response.status(200).json({
      count: sales.length,
      data: sales,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get One Sale by ID
router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const sale = await Sale.findById(id);

    return response.status(200).json(sale);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Update a Sale
router.put('/:id', async (request, response) => {
  try {
    // Check if all required fields are provided

    console.log("The request,",request.body)
    if (
      !request.body.customerName ||
      !request.body.phoneNumber ||
      !request.body.company ||
      !request.body.address ||
      !request.body.district ||
      !request.body.productModelNumber ||
      !request.body.soldPrice 
      // !request.body.salesDate
    ) {
      return response.status(400).send({
        message:
          'Send all required fields: customerName, phoneNumber, company, address, district, productModelNumber, soldPrice, salesDate',
      });
    }

    const { id } = request.params;

    const result = await Sale.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: 'Sale not found' });
    }

    return response.status(200).send({ message: 'Sale updated successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Delete a Sale
router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Sale.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: 'Sale not found' });
    }

    return response.status(200).send({ message: 'Sale deleted successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
