import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './db/connect.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';
import healthcheck from './routes/healthcheck.js';

dotenv.config();

const app = express();
app.use(cors({origin: process.env.CORS_ORIGIN}));
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);
app.use('/api/v1/healthcheck', healthcheck);

app.get('/', async (req, res) => {
  res.status(200).json({
    message: 'Hello from Own-AI !',
  });
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8000, () => console.log('Server started on port 8000'));
  } catch (error) {
    console.log(error);
  }
};

startServer();