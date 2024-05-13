import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { error } from "console";
import userRoutes from "./routes/user.route.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDb");
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();

app.listen(3000, () => {
  console.log("Server listening at port 3000");
});

app.use("/api/user", userRoutes);
