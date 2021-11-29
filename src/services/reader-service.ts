import { getRepository } from "typeorm";
import { Reader } from "../model/Reader";
import { GenericService } from "./generic-service";


class ReaderService extends GenericService<Reader>{

    constructor() {
        super(Reader);
    }

}

export default new ReaderService();