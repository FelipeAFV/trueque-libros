import { Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Book } from "./Book";


@Entity({name: 'authors'})
export class Author {

    @PrimaryGeneratedColumn({ name: 'id'})
    id?: number;

    @ManyToMany( () => Book)
    books: Book[];



}