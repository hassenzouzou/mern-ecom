import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute";

const app = express();
const port = 3001;

mongoose
  .connect("mongodb://localhost/27017/ecommerce")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));

app.use("/user", userRoute);

app.listen(port, () => {
  console.log(`Server is running at: http://localhost:${port}`);
});
