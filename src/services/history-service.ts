import { getRepository } from "typeorm";
import { Book } from "../model/Book";
import { History } from "../model/History";
import { Reader } from "../model/Reader";
import { GenericService } from "./generic-service";


class HistoryService extends GenericService<History>{

    constructor() {
        super(History);
    }


}

export default new HistoryService();