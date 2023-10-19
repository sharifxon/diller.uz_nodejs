const {Router} = require('express')

const router = Router()
const {
    getAllProducts,
    getProductById,
    addNewProduct,
    updateProductById,
    deleteProductbyId,

} =  require('../controllers/dillerControllers')
const { updateMany } = require('../models/dillerModel')

router.get('/', getAllProducts)
router.get('/:id', getProductById)
router.post('/add', addNewProduct)
router.put('/:id', updateProductById)
router.delete('/:id', deleteProductbyId)

module.exports = router