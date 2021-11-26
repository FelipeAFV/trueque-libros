import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'persons'})
export class Person {

    @PrimaryGeneratedColumn({ name: 'id'})
    id?: number;



}