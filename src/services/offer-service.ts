import { getRepository } from "typeorm";
import { Offer } from "../model/Offer";
import { Reader } from "../model/Reader";
import { GenericService } from "./generic-service";


class OfferService extends GenericService<Offer>{

    constructor() {
        super(Offer);
    }

}

export default new OfferService();