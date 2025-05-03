import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import passport from "passport";
import helloRoute from "./routes/sample";
import { useJwtStrategy } from "./middlewares/auth";
import { connectDB } from "./config/database";

const app = express();
const port = process.env.PORT || 8000;

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

passport.use(useJwtStrategy);

connectDB();

app.use("/", helloRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
