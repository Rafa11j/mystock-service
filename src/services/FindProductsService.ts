import { IProductFilterRequest } from '../interfaces/product'
import { getRepository, Like } from 'typeorm'
import Product from '../models/Product'

class FindProductsService {
  public async execute ({ name, description = '', category_id = '' }: IProductFilterRequest): Promise<Product[]> {
    const productRepository = getRepository(Product)

    if (category_id === '' || category_id === undefined) {
      const products = await productRepository.find({
        where: {
          name: Like(`%${name}%`),
          // category_id,
          description: Like(`%${description}%`)
        },
        relations: ['category'],
        order: {
          name: 'ASC'
        }
      })
      return products
    }

    const products = await productRepository.find({
      where: {
        name: Like(`%${name}%`),
        category_id,
        description: Like(`%${description}%`)
      },
      relations: ['category']
    })

    return products
  }
}

export default FindProductsService
