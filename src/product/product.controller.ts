import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private productService:ProductService){}

    @Post()
    async fetchproduct(@Body()payload){
        return await this.productService.createProduct(payload)
    }

    @Get()
    async getproduct(){
        return this.productService.getAllProducts()
    }
}
