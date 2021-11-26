import { getRepository } from "typeorm";
import { User } from "../model/User";
import { GenericService } from "./generic-service";


class UserService extends GenericService<User>{

    constructor() {
        super(User);
    }
}

export default new UserService();