import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(cors({
  origin: process.env.CORS_ORIGIN,
}))
app.use(express.json({ limit: '50mb' }));
app.use(express.static("public"))

// import routes
import postRoutes from './routes/postRoutes.js';
import imageRoutes from './routes/imageRoutes.js';
import healthcheck from './routes/healthcheck.js';


//routes declaration
app.use('/api/v1/post', postRoutes);
app.use('/api/v1/generateImage', imageRoutes);
app.use('/api/v1/healthcheck', healthcheck);


app.get('/', async (req, res) => {
  res.status(200).json({
    message: 'Hello from Own-AI !',
  });
});

export default app;