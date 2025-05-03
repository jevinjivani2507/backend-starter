import { Request, Response } from "express";

export const getUserData = async (req: Request, res: Response) => {
  try {
    res.status(200).json(req.user);
  } catch (error) {
    console.error("Failed to get transaction", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
