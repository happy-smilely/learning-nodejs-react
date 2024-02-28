import express from 'express';
const router = express.Router();

const EmailController = require('../controllers/emailController');

////
router.post('/sendEmail', EmailController.sendEmail);

module.exports = router;
