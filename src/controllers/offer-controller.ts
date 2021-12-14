import { Request, Response } from "express";
import { Offer } from "../model/Offer";
import bookService from "../services/book-service";
import offerService from "../services/offer-service";
import readerService from "../services/reader-service";


class OfferController {

    constructor() {

    }

    generateOffer = async (req: Request, res: Response) => {

        if (!req.user?.readerId) {
            return res.status(500).json({message: 'Error'});
        }

        const {requestedBookId, offeredBookId} = req.body;
        const reader = await readerService.getById(parseInt(req.user?.readerId));

        const bookOffered = await bookService.getById(parseInt(offeredBookId));
        const bookRequested = await bookService.getById(parseInt(requestedBookId));
        if (!bookOffered || ! bookRequested) {
            return res.status(500).json({message : 'No book found'});
        }

        const offer = new Offer();
        offer.requestedBook = bookRequested;
        offer.offeredBook = bookOffered;

        await offerService.create(offer);

        return res.status(200).json({message: 'Offer generated successfully'});
    }

    
}