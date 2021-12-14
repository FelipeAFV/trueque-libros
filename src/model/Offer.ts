import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Book } from "./Book";

@Entity({name: 'offers'})
export class Offer {

    @PrimaryGeneratedColumn({ name: 'id'})
    id?: number;

    @ManyToOne( () => Book, book => book.offer)
    @JoinColumn({name: 'requested_book_id'})
    requestedBook: Book;

    @ManyToOne( () => Book)
    @JoinColumn({name: 'offered_book_id'})
    offeredBook: Book;



  

}