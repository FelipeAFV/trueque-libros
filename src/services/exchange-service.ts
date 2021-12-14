import { getRepository } from "typeorm";
import { Book } from "../model/Book";
import { Exchange } from "../model/Exchange";
import { Reader } from "../model/Reader";
import { GenericService } from "./generic-service";


class ExchangeService extends GenericService<Exchange>{

    constructor() {
        super(Exchange);
    }

}

export default new ExchangeService();