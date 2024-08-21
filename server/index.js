import * as dotenv from 'dotenv';
import connectDB from './db/index.js';
import app from './app.js';

dotenv.config({
    path: './.env'
});

connectDB()
    .then(() => {
        app.listen(8000, () => console.log('Server started on port 8000'));
    })
    .catch((error) => {
        console.log("mongoDB cononnection error: ", error);
    });
