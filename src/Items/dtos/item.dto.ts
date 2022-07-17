import { Exclude } from "class-transformer";
import { IsNumber, IsOptional, IsString } from "class-validator";


export class items{
    @IsNumber()
    id:number;

    @IsString()
    name:string;

    @IsNumber()
    age?:number
}


export class opionalItems{
    @IsOptional()
    @IsNumber()
    id:number;

    @IsOptional()
    @IsString()
    name:string;

    @IsOptional()
    @IsNumber()
    age?:number
}
