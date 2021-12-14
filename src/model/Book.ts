import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Author } from "./Author";
import { Offer } from "./Offer";
import { Reader } from "./Reader";

@Entity({name: 'books'})
export class Book {

    @PrimaryGeneratedColumn({ name: 'id'})
    id?: number;

    @Column({name: 'title'})
    title: string;

    @ManyToOne( () => Reader, reader => reader.historyRecords)
    @JoinColumn({name: 'reader_id'})
    reader: Reader;

    @OneToMany(() => Offer, offer => offer.requestedBook)
    offer: Offer[];

    @ManyToMany( () => Author)
    @JoinTable({
        name: "book_author",
        joinColumn: {
            name: "book_id",
            referencedColumnName: "id"
        },
        inverseJoinColumn: {
            name: "author_id",
            referencedColumnName: "id"
        }
    })
    authors: Author[];



}