import express from "express";
import mongoose from "moogoose";

mongoose.connect();

const app = express();

app.listen(3000, () => {
  console.log("Server listening at port 3000");
});
