import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


const connectDB = async () => {
    try {
        mongoose.set('strictQuery', true);
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`\n MONGODB connection successful !! DB HOST: ${connectionInstance.connections[0].host} \n`);
    } catch (error) {
        console.log("MONGODB_URL", process.env.MONGODB_URL)
        console.error("MONGODB connection Failed", error);
        process.exit(1);
    }
}

export default connectDB;

