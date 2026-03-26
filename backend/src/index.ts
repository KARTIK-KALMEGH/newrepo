import "dotenv/config";
import cors from "cors";
import express from "express";
import { authRouter } from "./routes/auth.js";
import { assessmentRouter } from "./routes/assessment.js";
import { aiRouter } from "./routes/ai.js";
import { internshipRouter } from "./routes/internships.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ ok: true, service: "skillbridge-backend" });
});

app.use("/api/auth", authRouter);
app.use("/api/assessment", assessmentRouter);
app.use("/api/ai", aiRouter);
app.use("/api/internships", internshipRouter);

const port = Number(process.env.PORT || 4000);
app.listen(port, () => {
  console.log(`API running on http://localhost:${port}`);
});
