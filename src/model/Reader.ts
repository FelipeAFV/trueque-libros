import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Book } from "./Book";
import { History } from "./History";

@Entity({name: 'readers'})
export class Reader {

    @PrimaryGeneratedColumn({ name: 'id'})
    id?: number;

    @OneToMany(() => History, history => history.reader)
    historyRecords: History[];

    @OneToMany(() => Book, book => book.reader)
    books: Book[];

}