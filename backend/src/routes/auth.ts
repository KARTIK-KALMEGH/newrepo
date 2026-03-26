import { Router } from "express";
import jwt from "jsonwebtoken";
import { z } from "zod";

export const authRouter = Router();

const registerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8)
});

authRouter.post("/register", (req, res) => {
  const parsed = registerSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: parsed.error.flatten() });
  }

  // TODO: persist user in database and hash password.
  const token = jwt.sign({ email: parsed.data.email, role: "student" }, process.env.JWT_SECRET || "dev-secret", {
    expiresIn: "1h"
  });

  return res.status(201).json({ message: "Registered", token });
});

authRouter.post("/login", (_req, res) => {
  // TODO: validate credentials from DB.
  res.json({ token: "replace-with-real-token" });
});
