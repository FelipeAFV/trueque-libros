import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Reader } from "./Reader";


@Entity({name: 'users'})
export class User {

    @PrimaryGeneratedColumn({ name: 'id'})
    id?: number;

    @Column({name: 'username'})
    username: string;

    @Column({name: 'password'})
    password: string;

    @OneToOne( () => Reader )
    reader: Reader;



}