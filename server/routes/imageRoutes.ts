import express from "express";
const router = express.Router();

const DrawingController = require("../controllers/drawingController");

router.get("/getData", DrawingController.getCurrentDrawing);
router.post("/uploadData", DrawingController.uploadCurrentDrawing);

module.exports = router;
