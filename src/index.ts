import cors from "cors";
import express from "express";

import helloRoute from "./routes/sample";

const app = express();
const port = process.env.PORT || 8000;

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use("/", helloRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
