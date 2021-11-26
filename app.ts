import express, { json, Request, Response} from "express";
import cors from "cors";
const app = express();
const PORT = process.env.PORT;

app.use(cors({
    origin: 'http://localhost:5000',
    credentials: true
}));

app.use('/test', (req: Request, res: Response) => {
    res.status(200).json({ successMessage: 'Test route response'});
});

app.use(json());

app.listen(PORT || 3000, () => {
    console.log('App running on port', PORT || 3000);
})