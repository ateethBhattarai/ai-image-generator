import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connectdb.js";
import postRoutes from "./routes/postRoutes.js";
import homeRoute from "./routes/homeRoute.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/post", postRoutes);
app.use("/api/v1/home", homeRoute);

app.get("/", (req, res) => {
  res.send("Hello from backend!!");
});

try {
  connectDB(process.env.MONGODB_URL);

  app.listen(8080, () => {
    console.log("server started at: http://localhost:8080");
  });
} catch (error) {
  console.log(error);
}
