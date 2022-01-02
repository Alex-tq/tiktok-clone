import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema({
  channel: String,
  song: String,
  description: String,
  likes: Number,
  shares: Number,
  messages: Number,
  url: String,
});

const postModel = mongoose.model("tiktokVideos", postSchema);

export default postModel;
