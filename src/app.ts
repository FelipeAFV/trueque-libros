import express, { json, Request, Response} from "express";
import dotenv from "dotenv";
import path from "path";
import {router as AuthController} from './routes/auth'
import bookRoutes from './routes/book-routes'
dotenv.config();
import './auth/passport-config'
import passport, { session } from 'passport';
import cors from "cors";
import './config/database-connection'
import cookieParser from "cookie-parser";
const app = express();
const PORT = process.env.PORT;

console.log('NODE_ENV', process.env.NODE_ENV);

if (process.env.NODE_ENV == 'production') {

    app.use(express.static(path.join(process.cwd(), 'frontend/build')));
} else {

}

app.use(cors({
    origin: 'http://localhost:5000',
    credentials: true
}));
app.use(passport.initialize());
app.use(cookieParser());

app.use('/test', (req: Request, res: Response) => {
    res.status(200).json({ successMessage: 'Test route response'});
});

app.use(json());

if (process.env.NODE_ENV == 'production') {

    app.get('*', function (req, res) {
        res.sendFile(path.join(process.cwd(), 'frontend/build', 'index.html'));
    });
    
} else {

}

app.use('/auth', AuthController)

app.use('/books', passport.authenticate('jwt', {session: false}), bookRoutes );
// app.use('/books', bookRoutes );

app.get('/protection_test', passport.authenticate('jwt',{session: false}), (req:Request,res:Response) => res.json({res: req.user}))

app.get('/limpiar', (req:Request,res:Response) => res.clearCookie('auth').json({message: 'listo'}))

app.listen(PORT || 3000, () => {
    console.log('App running on port', PORT || 3000);
})