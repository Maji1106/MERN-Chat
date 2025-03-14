import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDB } from "./src/lib/db.js";
import authRouter from "./routes/auth.router.js";

dotenv.config();

const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use(cookieParser());
connectDB();
app.use(
  cors({
    origin: process.env.BASE_URL,
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("<h1>Welcome to SE Chat API</h1>");
});

app.use("/api/v1/auth", authRouter);

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
});
