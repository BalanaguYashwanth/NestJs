import { IsNumber } from "class-validator" 

export interface itemStructure{
    data:{
        id:number,
        name:string,
        age:number
    }[],

    postdata:{
        id:number,
        name:string,
        age:number
    }

    optionalPostdata:{
        id?:number,
        name?:string,
        age?:number
    }
}