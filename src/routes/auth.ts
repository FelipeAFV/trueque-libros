import {Router,Request,Response} from "express";
import AuthController from '../controllers/auth-controller'

const router : Router = Router();

router.get('/test', AuthController.test)

router.post('/signup', AuthController.SignUp);

router.post('/signIn', AuthController.signIn);

router.post('/json', (req:Request, res:Response) => {
    res.send(req.body.nombre)
})


export {router};