import { Router } from "express";

export const assessmentRouter = Router();

assessmentRouter.post("/submit", (req, res) => {
  const { answers = [] } = req.body as { answers: number[] };
  const score = answers.length * 10;

  return res.json({
    score,
    skillBands: {
      coding: score > 70 ? "intermediate" : "beginner",
      communication: "intermediate",
      problemSolving: score > 60 ? "intermediate" : "beginner"
    }
  });
});
