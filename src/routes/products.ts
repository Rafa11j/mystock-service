import { Router } from 'express'
import { getProducts, saveProduct, getProductsFilter, updateProduct, deleteProduct, getProduct, getProductPagination } from '../controllers/ProductController'

const productsRoutes = Router()

productsRoutes.get('/', getProducts)
productsRoutes.get('/filter', getProductsFilter)
productsRoutes.get('/pagination', getProductPagination)
productsRoutes.get('/:id', getProduct)
productsRoutes.post('/', saveProduct)
productsRoutes.put('/:id', updateProduct)
productsRoutes.delete('/:id', deleteProduct)

export default productsRoutes
