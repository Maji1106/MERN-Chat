import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";

dotenv.config();

const PORT = process.env.PORT();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.FRONEND_URL,
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("<h1>HELLO to chat</h1>");
});
const app = express();
app.listen(PORT, () => {
  console.log("server is run on http://localhost:" + PORT);
});
