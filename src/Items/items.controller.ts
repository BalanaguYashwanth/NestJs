import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { Observable } from "rxjs";
import {  items, opionalItems } from "./dtos/item.dto";
import { itemStructure } from "./items.model";
import { ItemService } from "./items.service";

@Controller('items')
export class ItemController{

    constructor(private readonly itemsService : ItemService ){}

    // @Get(':id') //non db
    // getItems( @Param('request') request:'string', @Param('id', ParseIntPipe) id:number){
    //     return this.itemsService.getAllItemsData()
    // }

    // @Post()
    // postItems(@Body()  items:items){
    //     return this.itemsService.postAllItemsData(items)
    // }

    @Get('db')
    getDB(){
        return this.itemsService.getAllItems()
    }

    @Get(':id')
    getDBById(@Param('id')  id:number){
        return this.itemsService.getAllItemsById(id)
    }
   
    @Post('db')
    postItemsDB(@Body() {id,name,age}:items):Observable<itemStructure['postdata']>{
        return this.itemsService.createPost({id,name,age})
    }

    @Put(':id')
    updateItemsDB(@Param('id') id:number , @Body() completeBody:items){
        return this.itemsService.updateById(id,completeBody)
    }

    @Delete(':id')
    deleteItems(@Param('id') id:number){
        return this.itemsService.deleteItem(id)
    }

}