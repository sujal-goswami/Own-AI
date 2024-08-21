import express from 'express';
import { getImage } from '../controllers/image.controller.js';

const router = express.Router();

router.route('/').get((req, res) => {
  res.status(200).json({ message: 'Hello from Own-AI !' });
});


router.route('/').post(getImage);


export default router;