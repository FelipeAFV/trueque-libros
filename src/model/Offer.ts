import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'offers'})
export class Offer {

    @PrimaryGeneratedColumn({ name: 'id'})
    id?: number;



}