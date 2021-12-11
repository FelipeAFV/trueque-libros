import { getRepository } from "typeorm";
import { Book } from "../model/Book";
import { Reader } from "../model/Reader";
import { GenericService } from "./generic-service";


class BookService extends GenericService<Book>{

    constructor() {
        super(Book);
    }

    getAllByNameLike = (title: string) => {
        return getRepository(Book).createQueryBuilder("book")
        .where("book.title like :title", { title:`%${title}%` }).getMany();
    }

}

export default new BookService();