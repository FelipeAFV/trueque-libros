import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Book } from "../model/Book";
import { History } from "../model/History";
import { Reader } from "../model/Reader";
import bookService from "../services/book-service";
import historyService from "../services/history-service";
import readerService from "../services/reader-service";

class BookController {

    constructor() {
        
    }

    addBook = async (req: Request, res: Response) => {
        console.log(req.user);
        if (!req.user?.readerId) {
            return res.status(500).json({message: 'Error'});
        }
        const reader = await readerService.getById(parseInt(req.user?.readerId));
        if (!reader) {
            return res.status(500);
        }

        
        const book: Book = req.body;
        book.reader = reader;
        
        const bookInserted = await bookService.create(book);
        const history: History = new History(reader, bookInserted);
        await historyService.create(history);

        return res.status(200).json({'Book created': bookInserted});
    }

    getBooks = async (req: Request, res: Response) => {
        const {title} = req.body;
        try {
            const books: Book[] = await bookService.getAllByNameLike(title);
            return res.status(200).json({ books: books});
            
        } catch(err) {
            return res.status(500).json({ Error: err});

        }

    }
}

export default new BookController();