import express from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.route('/').get((req, res) => {
  res.status(200).json({ message: 'Hello from Own-AI !' });
});

router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;
    
    const width = 1024;
    const height = 1034;
    const seed = 42;
    const model = 'flux';
    const imageUrl = `https://pollinations.ai/p/${encodeURIComponent(prompt)}?width=${width}&height=${height}&seed=${seed}&model=${model}`;

    // get image from this url
    const response = await fetch(imageUrl);
    const arrayBuffer = await response.arrayBuffer();
    const image = Buffer.from(arrayBuffer).toString('base64');  
  
    res.status(200).json({ photo: image });
  } catch (error) {
    console.error(error);
    res.status(500).send(error?.response.data.error.message || 'Something went wrong');
  }
});

export default router;