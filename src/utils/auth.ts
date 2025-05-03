import passport from "passport";
import { User } from "@/types/User";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";

export const generateToken = (user: User) => {
  return jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET || "",
    {
      expiresIn: "1d",
    }
  );
};

export const initiateGoogleLogin = passport.authenticate("google", {
  scope: ["profile", "email"],
});

export const handleGoogleCallback = (req: Request, res: Response) => {
  if (!req.user) {
    return res.redirect(`${process.env.FRONTEND_URL}`);
  }

  const token = generateToken(req.user as User);

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // Use secure cookies in production
    // sameSite: "strict", // Protect against CSRF
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  });
  res.redirect(process.env.FRONTEND_URL || "");
};
