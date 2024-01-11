import dotenv from "dotenv"
import connectDB from "./data/db.js";

//it is use to confgure .env files other wise it did not run 
dotenv.config({
    path: './.env'
})

connectDB()