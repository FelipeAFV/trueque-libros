import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Book } from "./Book";

@Entity({name: 'exchanges'})
export class Exchange {

    @PrimaryGeneratedColumn({ name: 'id'})
    id?: number;

    @ManyToOne( () => Book)
    @JoinColumn({name: 'book1_id'})
    book1: Book;
    
    @ManyToOne( () => Book)
    @JoinColumn({name: 'book2_id'})
    book2: Book;


    @Column({name: 'completed'})
    completed: boolean;

}