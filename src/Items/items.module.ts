import { Controller, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ItemController } from "./items.controller";
import { ItemsPostEntity } from "./items.entity";
import { ItemService } from "./items.service";

@Module({
    imports:[TypeOrmModule.forFeature([ItemsPostEntity])],
    providers:[ItemService],
    controllers:[ItemController]
})

export class ItemsModule{}