import mongoose from "mongoose";
import { db_Name } from "../constants.js";


const connectDB = async () => {
    try {
        const connection = await mongoose.connect(`${process.env.MONGODB_URI}/${db_Name}`)
        console.log(`MongoDB connected !! DB HOST: ${connection.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1)
    }
}

export default connectDB