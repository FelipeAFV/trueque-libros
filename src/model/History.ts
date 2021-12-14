import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Book } from "./Book";
import { Exchange } from "./Exchange";
import { Reader } from "./Reader";

@Entity({name: 'history'})
export class History {

    constructor(reader: Reader, book: Book, exchange: Exchange | null = null) {
        this.book = book;
        this.exchange = exchange;
        this.reader = reader;
    }

    @PrimaryGeneratedColumn({ name: 'id'})
    id?: number;

    @ManyToOne(() => Reader, reader => reader.historyRecords)
    @JoinColumn({name: 'reader_id'})
    reader: Reader;
    
    @ManyToOne( () => Book)
    @JoinColumn({name: 'book_id'})
    book: Book;

    @ManyToOne( () => Exchange)
    @JoinColumn({name: 'exchange_id'})
    exchange: Exchange | null;


}