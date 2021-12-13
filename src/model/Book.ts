import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Author } from "./Author";
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