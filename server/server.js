import inquiryRoutes from "./routes/inquiryRoutes.js";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/inquiry", inquiryRoutes);

connectDB();

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "HelloCRM Backend Running"
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});