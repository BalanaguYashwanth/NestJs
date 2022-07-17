import { Body, Controller, Get,Post } from "@nestjs/common";
import { ProductService, Typedproduct } from "./product.service";


@Controller('products')
export class ProductController{
    constructor(private readonly productService:ProductService){} //main logic

    @Post()
    addProduct(@Body() completeBody:Typedproduct):any{
        return this.productService.postProducts(completeBody); //link to main logic

    }

}