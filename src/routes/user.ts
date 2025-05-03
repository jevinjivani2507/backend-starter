import { Router } from "express";
import { getUserData } from "../controllers/user";

const router = Router();

router.get("/", getUserData);

export default router;
