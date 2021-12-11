import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Book } from "./Book";


@Entity({name: 'authors'})
export class Author {

    @PrimaryGeneratedColumn({ name: 'id'})
    id?: number;

    @Column({name: 'name'})
    name: string;


    @ManyToMany( () => Book)
    books?: Book[];



}