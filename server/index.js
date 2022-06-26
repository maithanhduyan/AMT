import express from "express";
import compression from "compression";
import db from "./config/database.js";
import apiRoutes from "./routes/api.js";
import cors from "cors";

const app = express();

try {
  await db.authenticate();
  console.log("Database connected...");
} catch (error) {
  console.error("Connection error:", error);
}

// app.use(compression());
app.use(cors());
app.use(express.json());
app.use("/api", apiRoutes);

app.listen(5000, () => console.log("Server running at port 5000"));
