import express from 'express'
import { getProduct, getProducts, addProduct, updateProduct, deleteProduct } from '../controllers/product.js'

const router=express.Router()

router.get('/',getProducts)
router.get('/:id',getProduct)
router.post('/',addProduct)
router.patch('/:id',updateProduct)
router.delete('/:id',deleteProduct)

export default router