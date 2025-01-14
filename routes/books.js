import express from "express"
import upload from "../middleware/uploads.js"
import { AddBook, DeleteBook, ReadBook, ReadSingleBook, UpdateBook } from "../controller/books.js";

const router = express.Router();

router.get("/read",ReadBook);
router.post("/create", upload.single("photo") ,AddBook);
router.get("/read_single_book/:id",ReadSingleBook);
router.put("/update/:id", upload.single("photo") ,UpdateBook);
router.get("/delete/:id",DeleteBook);

export default router;