import { app } from "./app.js";
import { dbConnection } from "./db/dbConnection.js";
import dotenv from "dotenv";
import "./utils/redis.js";

dotenv.config({
    path: "./.env"
})

dbConnection()
    .then(app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on ${process.env.PORT}`);

    })).catch((error) => {
        console.log("error : ", error);

    })