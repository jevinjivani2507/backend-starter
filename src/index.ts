import cors from "cors";
import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
