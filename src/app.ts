import express, { json, Request, Response} from "express";
import dotenv from "dotenv";
import path from "path";
import {router as AuthController} from './routes/auth'
dotenv.config();
import cors from "cors";
import './config/database-connection'
const app = express();
const PORT = process.env.PORT;

console.log('NODE_ENV', process.env.NODE_ENV);

if (process.env.NODE_ENV == 'production') {

    // app.use(express.static(path.join(process.cwd(), 'frontend/build')));
} else {

}

app.use(cors({
    origin: 'http://localhost:5000',
    credentials: true
}));

app.use('/test', (req: Request, res: Response) => {
    res.status(200).json({ successMessage: 'Test route response'});
});

app.use(json());

if (process.env.NODE_ENV == 'production') {

    // app.get('*', function (req, res) {
    //     res.sendFile(path.join(process.cwd(), 'frontend/build', 'index.html'));
    // });
    
} else {

}

app.use('/log', AuthController)


app.listen(PORT || 3000, () => {
    console.log('App running on port', PORT || 3000);
})