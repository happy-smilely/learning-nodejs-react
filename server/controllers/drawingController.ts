import { Request, Response, NextFunction, CookieOptions } from "express";
import mysql from "../utils/mysql";
//import pgPool from "../utils/pgdb";

exports.getCurrentDrawing = async (req: Request, res: Response, next: NextFunction) => {
  const drawings = await mysql.query("SELECT * from drawings WHERE id = 0");
  res.json({
    status: "success",
    data: drawings,
  });
};

//
exports.uploadCurrentDrawing = async (req: Request, res: Response, next: NextFunction) => {
  const drawingString = req.body.drawing;
  const newDrawing = await mysql.query("UPDATE drawings SET data=? WHERE id = 0", [drawingString]);
  res.json({
    status: "success",
    data: newDrawing,
  });
};
