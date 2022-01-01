import express from "express";
import mongoose from "mongoose";

const PORT = process.env.PORT || 8001;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("hello tiktok");
});

app.listen(PORT, () => {
  console.log(`listening on localhost:${PORT}`);
});
