import { Column, Entity, OneToMany, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { Book } from "./Book";
import { History } from "./History";
import { User } from "./User";

@Entity({name: 'readers'})
export class Reader {

    @PrimaryGeneratedColumn({ name: 'id'})
    id?: number;

    @OneToMany(() => History, history => history.reader)
    historyRecords: History[];

    @OneToMany(() => Book, book => book.reader)
    books: Book[];

    @OneToOne( () => User, {cascade : true})
    @JoinColumn({name: 'user_id'})
    user: User;

}