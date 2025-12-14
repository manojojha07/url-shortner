import express from "express"
import { getAllUserUrls } from "../controller/user.controller.js"
import { authMiddleware } from "../midelwere/auth midlewre.js"

const router = express.Router()

router.post("/urls",authMiddleware, getAllUserUrls);

export default router