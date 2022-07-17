import { Column,Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('items_data')
export class ItemsPostEntity{
    @PrimaryGeneratedColumn()
    id:number

    @Column({default:''})
    name:string

    @Column({type:'timestamp', default:()=>'CURRENT_TIMESTAMP'})
    createdAt:Date;
}