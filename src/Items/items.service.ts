import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { from, Observable } from "rxjs";
import { Repository } from "typeorm";
import { ItemsPostEntity } from "./items.entity";
import { itemStructure } from "./items.model";

@Injectable()
export class ItemService{

    constructor(
        @InjectRepository(ItemsPostEntity)
        private readonly itemsDBService : Repository<ItemsPostEntity> 
    ){}

    data=[]

    checkDataStructure(data:itemStructure['data']){
        return data
    }

    getAllItemsData(){
        return this.checkDataStructure(this.data)
    }

    postAllItemsData(items:itemStructure['postdata']){  //without database
       this.data.push(items)
        return this.data
    }

    createPost({name,age}:itemStructure['postdata']):Observable<itemStructure['postdata']>{  //with database
        return from(this.itemsDBService.save({name,age}))
    }

    getAllItems(){
        return from(this.itemsDBService.find())
    }

    getAllItemsById(id:number){
        return from(this.itemsDBService.findOneBy({id}))
    }

    updateById(id:number,body:{}){
        return from(this.itemsDBService.update(id,body))
    }

    deleteItem(id:number){
        return this.itemsDBService.delete(id)
    }
}