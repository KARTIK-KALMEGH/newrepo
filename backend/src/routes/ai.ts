import { Router } from "express";
import { generateRoadmap } from "../services/roadmap.js";

export const aiRouter = Router();

aiRouter.post("/mentor", async (req, res) => {
  const { goal = "software engineer", level = "beginner" } = req.body;
  return res.json({
    reply: `For ${goal} at ${level} level, focus on core programming, projects, and interview prep.`
  });
});

aiRouter.post("/roadmap/generate", async (req, res) => {
  const { targetRole = "frontend developer", weeks = 12 } = req.body;
  const roadmap = generateRoadmap(targetRole, Number(weeks));
  return res.json({ targetRole, roadmap });
});
