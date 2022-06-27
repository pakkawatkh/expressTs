
import express from "express";
import cors from "cors";
import helmet from "helmet";
const userRouter = require("./router/userRouter");

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "");
  next();
});

app.use("/api/user", userRouter);

const PORT = 7000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});