import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Book } from "../model/Book";
import { Exchange } from "../model/Exchange";
import { History } from "../model/History";
import { Offer } from "../model/Offer";
import { Reader } from "../model/Reader";
import bookService from "../services/book-service";
import exchangeService from "../services/exchange-service";
import historyService from "../services/history-service";
import offerService from "../services/offer-service";
import readerService from "../services/reader-service";

class ExchangeController {

    constructor() {
        
    }

    generatePendingExchange = async (req: Request, res: Response) => {
        if (!req.user?.readerId) {
            return res.status(500).json({message: 'Error'});
        }
        try {
            const reader = await readerService.getById(parseInt(req.user?.readerId));
            if (!reader) {
                return res.status(500);
            }
            
            const {offerId} = req.body;
            
            const offer: Offer | undefined = await offerService.getById(offerId);
            
            if (!offer || !offer.id) {
                return res.status(500).json({ message: 'Error'});
                
            }
            
            if(!offer.offeredBook.reader.id) {
                return res.status(500).json({ message: 'Error'});

            }
            const offerReader = await readerService.getById(offer.offeredBook.reader.id);
            if(!offerReader) {
                return res.status(500).json({ message: 'Error'});

            }
            
            const exchange: Exchange = new Exchange();
            exchange.book1 = offer.offeredBook;
            exchange.book2 = offer.requestedBook;
            exchange.completed = false;

            await exchangeService.create(exchange);

            const historyOfOfferedBook = new History(offerReader, offer.offeredBook, exchange);
            const historyOfRequestedBook = new History(reader, offer.requestedBook, exchange);

            await historyService.create(historyOfOfferedBook);
            await historyService.create(historyOfRequestedBook);

            const rowsAffected = await offerService.deleteById(offerId);

            return res.status(200).json({ message: 'Offer acepted and exchange created succesfully '});
        
        } catch (err) {
            return res.status(500).json({ message: 'Error'});
        }
        


    }

    
}

export default new ExchangeController();