const { response } = require('express')
const Diller = require('../models/dillerModel')

// CRUD

// method get
//  get all products
const getAllProducts = async (req, res) => {
    const products = await Diller.find()

    res.status(200).json({
        message: 'success',
        products
    })
}
// method get
//  get ById product
const getProductById = async (req, res) => {
    try {
      const product = await Diller.findById(req.params.id);
      if (!product) {
        return res.status(404).json({
          message: 'Product not found',
        });
      }
      
      res.status(200).json({
        message: 'success',
        product
      
      });
    } catch (error) {
      console.error(error);
      
    }
  };

//method post
// add new product
const addNewProduct = async (req, res) => {
    const {image, title, description, price} = req.body

    const newProduct = await Diller.create({
        image,
        title,
        description,
        price
    })
    res.status(201).json({
      message: 'Success',
        newProduct
    })
}

// method  put
// update Product by id
const updateProductById = async (req, res) => {
  const {image, title, description, price} = req.body

  const  updateProduct = await Diller.findByIdAndUpdate(req.params.id, {
    image,
    title,
    description,
    price
  })

  res.status(200).json({
    message: 'success',
    updateProduct
  })
}

// method delete
// deleteProduct by id
const deleteProductbyId =  async (req, res) => {
  await Diller.findByIdAndRemove(req.params.id)

  res.status(200).json({
    message: 'success',
  })
}

module.exports = {
    getAllProducts,
    getProductById,
    addNewProduct,
    updateProductById,
    deleteProductbyId,
}