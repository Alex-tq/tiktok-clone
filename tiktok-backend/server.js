import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import data from "./data.js";
import VideosModel from "./postModel.js";

dotenv.config();

//app Config
const PORT = process.env.PORT || 8001;
const app = express();

//Middleware
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

// DB config
const URI = process.env.MONGODB_URI;
mongoose.connect(URI, {
  useUnifiedTopology: true,
});

//Api routes
app.get("/", (req, res) => {
  res.status(200).send("hello tiktok");
});
app.get("/v1/posts", (req, res) => {
  res.status(200).send(data);
});
app.get("/v2/posts", (req, res) => {
  VideosModel.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/v2/posts", (req, res) => {
  const dbVideos = req.body;

  VideosModel.create(dbVideos, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

//Server Listener
app.listen(PORT, () => {
  console.log(`listening on localhost:${PORT}`);
});
