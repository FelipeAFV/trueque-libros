import { getRepository } from "typeorm";
import { User } from "../model/User";
import { GenericService } from "./generic-service";


class UserService extends GenericService<User>{

    constructor() {
        super(User);
    }

    getUserWithReaderByUsername = async (username: string) => {
        return getRepository(User).findOne({ where: { 
            username: username
        },relations: ['reader']})


    }
}

export default new UserService();