import { Injectable } from "@nestjs/common"
import { checkProduct } from "./product.model";

export interface Typedproduct{
    name:string,
    value:number
}

@Injectable()
export class ProductService{

    Allproducts:any;

    postProducts(data:Typedproduct){
       return data
    }

}