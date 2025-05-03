import { Router } from "express";
import { sayHello } from "../controllers/sample";

const router = Router();

router.get("/hello", sayHello);

export default router;
