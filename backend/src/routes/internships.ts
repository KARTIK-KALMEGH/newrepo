import { Router } from "express";

export const internshipRouter = Router();

internshipRouter.get("/", (_req, res) => {
  res.json([
    { id: 1, company: "StartupX", role: "Frontend Intern", location: "Bengaluru" },
    { id: 2, company: "DataWorks", role: "Data Analyst Intern", location: "Remote" }
  ]);
});
