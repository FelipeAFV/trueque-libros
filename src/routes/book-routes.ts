import { Router } from "express";
import bookController from "../controllers/book-controller";
const router = Router();

router.post('/', bookController.addBook);
router.post('/all', bookController.getBooks);

export default router;