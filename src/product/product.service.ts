import { Injectable } from '@nestjs/common';
import { product } from './interface/product.interface';

@Injectable()
export class ProductService {
    private products:product[] = [];

    async createProduct(product:product){
        //const prod = await this.products.push(product);--- [FOR NO. OF PRODUCTS CREATED]
        const prod = await this.products.push(product);
        return{
            message: 'product added succesfully',
            statusCode: 201,
            prod
        }
    }

    async getAllProducts(){
        return await this.products;
    }
}
