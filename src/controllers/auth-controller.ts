import {Request,response,Response} from "express";
import userService from '../services/user-service';
import readerService from "../services/reader-service";
import bcrypt from "bcrypt";
import {User} from '../model/User'
import {Reader} from '../model/Reader'
import jwt from "jsonwebtoken";
import secret from '../auth/secret'
class AuthController {
    test(req:Request, res:Response) {
        res.send('todo ok')
    }

    SignUp = async (req:Request, res:Response) => {
        const user_found = await userService.getByConditions({where: {username: req.body.username}});
        
        if(user_found){ 
            res.status(500).json({error: "user alredy exists"})
        }else{
            bcrypt.hash(req.body.password, 5)
                .then( (hash) => {
                    const new_user = new User();
                    new_user.username = req.body.username;
                    new_user.password = hash;
                    return Promise.resolve(new_user);
                })
                .then(async (new_user) => {
                    const new_reader = new Reader();
                    new_reader.user = new_user;
                    new_reader.books = [];
                    new_reader.historyRecords = [];
                    const cli = await readerService.create(new_reader)
                    const token = jwt.sign({reader_id: cli.id}, secret.key)
                    res.cookie('auth',token)
                    res.json({message:'user added succesfully',record: cli})
                }).catch((error) => {
                    console.log(error);
                    res.status(500).json({error: "internal server error"})
                })   
        }
    }

    signIn = async (req: Request, res: Response) => {
        const {username, password} = req.body;
        try {
            console.log(username, password);
            const user = await userService.getByConditions({username: username});
            const reader = await readerService.getByConditions({user: user});
            // const user = await userService.getUserWithReaderByUsername(username);
            console.log(user)
            if (!user || !reader) {
                return res.status(200).json({ message: 'User not exist'});
            }
            
            const passwordCorrect = await bcrypt.compare(password, user.password);
            console.log(passwordCorrect)
            if (!passwordCorrect) {
                return res.status(200).json({ message: 'Incorrect password'});
            }
            
            const token = jwt.sign({readerId: reader.id}, secret.key);
            console.log(token)
            res.cookie('auth',token);
            return res.status(200).json({message: 'User logged successfully', reader: reader});

        } catch (err) {
            return res.status(500).json({message: 'Internal server error', err: err});
        }
    }

}

export default new AuthController();
