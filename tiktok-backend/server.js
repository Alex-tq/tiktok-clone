import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

//app Config
const PORT = process.env.PORT || 8001;
const app = express();

// DB config
const URI = process.env.MONGODB_URI;

//Middleware
app.use(express.json());

//Api routes
app.get("/", (req, res) => {
  res.status(200).send("hello tiktok");
});

//Server Listener
app.listen(PORT, () => {
  console.log(`listening on localhost:${PORT}`);
});
